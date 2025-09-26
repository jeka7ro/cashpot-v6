
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  LayoutDashboard, Building2, MapPin, Factory, Monitor, 
  Gamepad2, Coins, FileText, FlaskConical, Trophy, 
  Users, Moon, User as UserIcon, Settings, LogOut, BarChart3,
  ChevronRight, ChevronDown, Laptop, FileCheck, Building
} from "lucide-react";
import { Company, User } from "@/api/entities";
import { Location } from "@/api/entities";
import { Provider } from "@/api/entities";
import { Cabinet } from "@/api/entities";
import { GameMix } from "@/api/entities";
import { Platform } from "@/api/entities";
import { SlotMachine } from "@/api/entities";
import { Invoice } from "@/api/entities";
import { Metrology, MetrologyApproval, MetrologyCommission, MetrologyAuthority, MetrologySoftware } from "@/api/entities";
import { Jackpot } from "@/api/entities";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [currentUser] = useState({
    first_name: "Administrator",
    last_name: "Sistem",
    email: "admin@cashpot.ro",
    role: "Admin",
    avatar: null // Will be set when user uploads an avatar
  });

  const [counts, setCounts] = useState({
    companies: 0,
    locations: 0,
    providers: 0,
    cabinets: 0,
    gameMixes: 0,
    platforms: 0,
    slots: 0,
    warehouse: 0,
    metrology: 0,
    metrologyApprovals: 0,
    metrologyCommissions: 0,
    metrologyAuthorities: 0,
    metrologySoftware: 0,
    jackpots: 0,
    invoices: 0,
    users: 0,
  });

  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        console.log('Fetching counts for dashboard...');
        
        const [
          companies, locations, providers, cabinets, gameMixes, platforms,
          slotMachines, invoices, metrology, metrologyApprovals, metrologyCommissions, metrologyAuthorities, metrologySoftware, jackpots, users
        ] = await Promise.all([
          Company.list(), Location.list(), Provider.list(), Cabinet.list(),
          GameMix.list(), Platform.list(), SlotMachine.list(), Invoice.list(), Metrology.list(),
          MetrologyApproval.list(), MetrologyCommission.list(), MetrologyAuthority.list(), MetrologySoftware.list(),
          Jackpot.list(), User.list()
        ]);
        
        console.log('Fetched data:', {
          companies: companies.length,
          locations: locations.length,
          providers: providers.length,
          cabinets: cabinets.length,
          gameMixes: gameMixes.length,
          platforms: platforms.length,
          slotMachines: slotMachines.length,
          invoices: invoices.length,
          metrology: metrology.length,
          metrologyApprovals: metrologyApprovals.length,
          metrologyCommissions: metrologyCommissions.length,
          metrologyAuthorities: metrologyAuthorities.length,
          metrologySoftware: metrologySoftware.length,
          jackpots: jackpots.length,
          users: users.length
        });
        
        const warehouseCount = slotMachines.filter(m => m.status === 'storage' || !m.location_id).length;

        const newCounts = {
          companies: companies.length,
          locations: locations.length,
          providers: providers.length,
          cabinets: cabinets.length,
          gameMixes: gameMixes.length,
          platforms: platforms.length,
          slots: slotMachines.length,
          warehouse: warehouseCount,
          metrology: metrology.length,
          metrologyApprovals: metrologyApprovals.length,
          metrologyCommissions: metrologyCommissions.length,
          metrologyAuthorities: metrologyAuthorities.length,
          metrologySoftware: metrologySoftware.length,
          jackpots: jackpots.length,
          invoices: invoices.length,
          users: users.length,
        };
        
        console.log('Setting counts:', newCounts);
        setCounts(newCounts);

      } catch (error) {
        console.error("Failed to fetch sidebar counts:", error);
      }
    };

    fetchCounts();
  }, []);

  // Auto-expand menu if current page is in submenu
  useEffect(() => {
    const currentPath = location.pathname;
    navigationItems.forEach(item => {
      if (item.submenu) {
        const hasActiveSubmenu = item.submenu.some(subItem => subItem.url === currentPath);
        if (hasActiveSubmenu) {
          setExpandedMenus(prev => ({
            ...prev,
            [item.title]: true
          }));
        }
      }
    });
  }, [location.pathname]);
  
  const navigationItems = [
    { title: "Dashboard", url: createPageUrl("Dashboard"), icon: LayoutDashboard, count: null },
    { title: "Companies", url: createPageUrl("Companies"), icon: Building2, count: counts.companies },
    { title: "Locations", url: createPageUrl("Locations"), icon: MapPin, count: counts.locations },
    { title: "Providers", url: createPageUrl("Providers"), icon: Factory, count: counts.providers },
    { title: "Cabinets", url: createPageUrl("Cabinets"), icon: Monitor, count: counts.cabinets },
    { 
      title: "Game Mixes", 
      url: createPageUrl("GameMixes"), 
      icon: Gamepad2, 
      count: counts.gameMixes,
      submenu: [
        { title: "Platforms", url: createPageUrl("Platforms"), icon: Laptop, count: counts.platforms }
      ]
    },
    { title: "Slots", url: createPageUrl("SlotMachines"), icon: Coins, count: counts.slots },
    { title: "Warehouse", url: createPageUrl("Warehouse"), icon: Building2, count: counts.warehouse },
    { 
      title: "Metrology", 
      url: createPageUrl("MetrologyMain"), 
      icon: FlaskConical, 
      count: counts.slots,
      submenu: [
        { title: "Certificate Metrologice", url: createPageUrl("Metrology"), icon: FileText, count: counts.metrology },
        { title: "Aprobări de tip", url: createPageUrl("MetrologyApprovals"), icon: FileCheck, count: counts.metrologyApprovals },
        { title: "Comisii", url: createPageUrl("MetrologyCommissions"), icon: Users, count: counts.metrologyCommissions },
        { title: "Autorități Metrologice", url: createPageUrl("MetrologyAuthorities"), icon: Building, count: counts.metrologyAuthorities },
        { title: "Software", url: createPageUrl("MetrologySoftware"), icon: Laptop, count: counts.metrologySoftware }
      ]
    },
    { title: "Jackpots", url: createPageUrl("Jackpots"), icon: Trophy, count: counts.jackpots },
    { title: "Invoices", url: createPageUrl("Invoices"), icon: FileText, count: counts.invoices },
    { title: "ONJN Reports", url: createPageUrl("ONJNReports"), icon: BarChart3, count: 0 },
    { title: "Legal Documents", url: createPageUrl("LegalDocuments"), icon: FileText, count: 3 },
    { title: "Users", url: createPageUrl("Users"), icon: Users, count: counts.users },
    { title: "Settings", url: createPageUrl("Settings"), icon: Settings, count: null }
  ];

  const toggleMenu = (menuTitle) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuTitle]: !prev[menuTitle]
    }));
  };

  const getUserInitials = () => {
    if (!currentUser) return "A";
    
    const firstName = currentUser.first_name || "";
    const lastName = currentUser.last_name || "";
    const username = currentUser.username || "";
    const email = currentUser.email || "";
    
    // Try to get initials from first and last name
    if (firstName && lastName) {
      return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    }
    
    // If no first/last name, try username
    if (username) {
      return username.charAt(0).toUpperCase();
    }
    
    // If no username, try email
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    
    // Default fallback
    return "A";
  };

  return (
    <div className="min-h-screen flex w-full bg-background light">
      <style>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          margin-bottom: 2px;
          color: hsl(var(--sidebar-foreground));
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
          font-size: 14px;
          font-weight: 500;
        }
        
        .nav-item:hover {
          background: hsl(var(--sidebar-accent));
          color: hsl(var(--sidebar-accent-foreground));
        }
        
        .nav-item.active {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        
        .count-badge {
          background: hsl(var(--muted));
          color: hsl(var(--muted-foreground));
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          margin-left: auto;
        }
      `}</style>

      {/* Sidebar */}
      <div className="w-64 bg-sidebar-background border-r border-sidebar-border flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#000000"/>
                <g fill="#FFD700" opacity="0.9">
                  <path d="M16 2 L17.5 6 L22 4.5 L18.5 8 L20 12.5 L16 10 L12 12.5 L13.5 8 L10 4.5 L14.5 6 Z"/>
                  <path d="M30 16 L26 17.5 L27.5 22 L23 18.5 L18.5 20 L21 16 L18.5 12 L23 13.5 L27.5 10 L26 14.5 Z"/>
                  <path d="M16 30 L14.5 26 L10 27.5 L13.5 23 L12 18.5 L16 21 L20 18.5 L18.5 23 L22 27.5 L17.5 26 Z"/>
                  <path d="M2 16 L6 14.5 L4.5 10 L8 13.5 L12.5 12 L10 16 L12.5 20 L8 18.5 L4.5 22 L6 17.5 Z"/>
                  <path d="M25.5 6.5 L23 8 L24.5 10.5 L22 9 L19.5 10.5 L21.5 8 L19.5 5.5 L22 7 L24.5 4.5 L23 6 Z"/>
                  <path d="M6.5 6.5 L9 8 L7.5 10.5 L10 9 L12.5 10.5 L10.5 8 L12.5 5.5 L10 7 L7.5 4.5 L9 6 Z"/>
                  <path d="M25.5 25.5 L23 24 L24.5 21.5 L22 23 L19.5 21.5 L21.5 24 L19.5 26.5 L22 25 L24.5 27.5 L23 26 Z"/>
                  <path d="M6.5 25.5 L9 24 L7.5 21.5 L10 23 L12.5 21.5 L10.5 24 L12.5 26.5 L10 25 L7.5 27.5 L9 26 Z"/>
                </g>
                <g fill="#FFD700" stroke="#FFD700" strokeWidth="0.5">
                  <line x1="16" y1="8" x2="16" y2="24" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M12 10 C12 8, 14 6, 16 6 C18 6, 20 8, 20 10 C20 12, 18 14, 16 14 C14 14, 12 16, 12 18 C12 20, 14 22, 16 22 C18 22, 20 20, 20 18" 
                        fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-lg text-sidebar-primary">CASHPOT</h2>
              <p className="text-xs text-sidebar-foreground/70">Gaming Management System</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.url;
            const isExpanded = expandedMenus[item.title];
            const navClasses = `nav-item ${isActive ? 'active' : ''}`;
            
            return (
              <div key={item.title}>
                {item.submenu ? (
                  <div>
                    <div className="flex items-center">
                      <Link to={item.url} className={`${navClasses} nav-item flex-1`}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                        {item.count !== null && (
                          <span className="count-badge">{item.count}</span>
                        )}
                      </Link>
                      <button 
                        onClick={() => toggleMenu(item.title)}
                        className="p-2 hover:bg-sidebar-accent rounded"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    {/* Expandable Submenu */}
                    {isExpanded && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.submenu.map((subItem) => {
                          const isSubActive = location.pathname === subItem.url;
                          const subNavClasses = `nav-item ${isSubActive ? 'active' : ''} text-sm`;
                          
                          return (
                            <Link key={subItem.title} to={subItem.url} className={`${subNavClasses} nav-item`}>
                              <subItem.icon className="w-3 h-3" />
                              <span>{subItem.title}</span>
                              {subItem.count !== null && (
                                <span className="count-badge">{subItem.count}</span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.url} className={`${navClasses} nav-item`}>
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                    {item.count !== null && (
                      <span className="count-badge">{item.count}</span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 main-content">
        {/* Top Bar */}
        <header className="h-16 bg-background border-b border-border px-6 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={currentUser?.avatar} alt={`${currentUser?.first_name} ${currentUser?.last_name}`} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {getUserInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-medium text-foreground">
                      {currentUser?.first_name && currentUser?.last_name 
                        ? `${currentUser.first_name} ${currentUser.last_name}`
                        : currentUser?.username || currentUser?.email || "Administrator"
                      }
                    </div>
                    <div className="text-xs text-muted-foreground">{currentUser?.role || "Admin"}</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <UserIcon className="w-4 h-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  <a href="/Settings" className="nav-item">
                    System Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
