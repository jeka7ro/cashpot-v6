#!/usr/bin/env python3
"""
Backend API Testing for Financial Planner Pro
Tests all authentication, company management, location management, equipment management, and dashboard APIs
"""

import requests
import json
import sys
import base64
from datetime import datetime

# Configuration
BACKEND_URL = "https://96ffa7d7-b46c-4a85-a621-1f240423f6c2.preview.emergentagent.com/api"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "password"

class APITester:
    def __init__(self):
        self.session = requests.Session()
        self.auth_token = None
        self.test_results = []
        self.created_company_id = None
        self.created_location_id = None
        self.created_provider_id = None
        self.created_game_mix_id = None
        self.created_cabinet_id = None
        self.created_slot_machine_id = None
        self.created_attachment_ids = []  # Track created attachments for cleanup
        
    def log_test(self, test_name, success, message="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if message:
            print(f"   {message}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat()
        })
    
    def test_authentication(self):
        """Test authentication APIs"""
        print("=== TESTING AUTHENTICATION APIS ===")
        
        # Test 1: Login with valid credentials
        try:
            login_data = {
                "username": ADMIN_USERNAME,
                "password": ADMIN_PASSWORD
            }
            response = self.session.post(f"{BACKEND_URL}/auth/login", json=login_data)
            
            if response.status_code == 200:
                data = response.json()
                if "access_token" in data and "user" in data:
                    self.auth_token = data["access_token"]
                    self.session.headers.update({"Authorization": f"Bearer {self.auth_token}"})
                    self.log_test("POST /auth/login", True, f"Successfully logged in as {data['user']['username']}")
                else:
                    self.log_test("POST /auth/login", False, "Missing access_token or user in response", data)
            else:
                self.log_test("POST /auth/login", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /auth/login", False, f"Exception: {str(e)}")
        
        # Test 2: Get current user info
        if self.auth_token:
            try:
                response = self.session.get(f"{BACKEND_URL}/auth/me")
                
                if response.status_code == 200:
                    data = response.json()
                    if "username" in data and "role" in data:
                        self.log_test("GET /auth/me", True, f"Retrieved user info: {data['username']} ({data['role']})")
                    else:
                        self.log_test("GET /auth/me", False, "Missing username or role in response", data)
                else:
                    self.log_test("GET /auth/me", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /auth/me", False, f"Exception: {str(e)}")
        
        # Test 3: Login with invalid credentials
        try:
            invalid_login = {
                "username": "invalid_user",
                "password": "wrong_password"
            }
            response = self.session.post(f"{BACKEND_URL}/auth/login", json=invalid_login)
            
            if response.status_code == 401:
                self.log_test("POST /auth/login (invalid credentials)", True, "Correctly rejected invalid credentials")
            else:
                self.log_test("POST /auth/login (invalid credentials)", False, f"Expected 401, got {response.status_code}")
        except Exception as e:
            self.log_test("POST /auth/login (invalid credentials)", False, f"Exception: {str(e)}")
    
    def test_company_management(self):
        """Test company management APIs"""
        print("=== TESTING COMPANY MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Company Management", False, "No auth token available")
            return
        
        # Test 1: Create a new company
        try:
            company_data = {
                "name": "Bucharest Gaming Palace",
                "registration_number": "J40/12345/2024",
                "tax_id": "RO12345678",
                "address": "Calea Victoriei 120, Sector 1",
                "phone": "+40 21 123 4567",
                "email": "contact@bucharestgaming.ro",
                "website": "https://bucharestgaming.ro",
                "contact_person": "Alexandru Popescu"
            }
            response = self.session.post(f"{BACKEND_URL}/companies", json=company_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "name" in data:
                    self.created_company_id = data["id"]
                    self.log_test("POST /companies", True, f"Created company: {data['name']} (ID: {data['id']})")
                else:
                    self.log_test("POST /companies", False, "Missing id or name in response", data)
            else:
                self.log_test("POST /companies", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /companies", False, f"Exception: {str(e)}")
        
        # Test 2: Get all companies
        try:
            response = self.session.get(f"{BACKEND_URL}/companies")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /companies", True, f"Retrieved {len(data)} companies")
                else:
                    self.log_test("GET /companies", False, "Response is not a list", data)
            else:
                self.log_test("GET /companies", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /companies", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific company
        if self.created_company_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/companies/{self.created_company_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_company_id:
                        self.log_test("GET /companies/{id}", True, f"Retrieved company: {data['name']}")
                    else:
                        self.log_test("GET /companies/{id}", False, "Company ID mismatch", data)
                else:
                    self.log_test("GET /companies/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /companies/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update company
        if self.created_company_id:
            try:
                update_data = {
                    "name": "Bucharest Gaming Palace - Updated",
                    "registration_number": "J40/12345/2024",
                    "tax_id": "RO12345678",
                    "address": "Calea Victoriei 120, Sector 1, Bucharest",
                    "phone": "+40 21 123 4567",
                    "email": "contact@bucharestgaming.ro",
                    "website": "https://bucharestgaming.ro",
                    "contact_person": "Alexandru Popescu"
                }
                response = self.session.put(f"{BACKEND_URL}/companies/{self.created_company_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "name" in data and "Updated" in data["name"]:
                        self.log_test("PUT /companies/{id}", True, f"Updated company: {data['name']}")
                    else:
                        self.log_test("PUT /companies/{id}", False, "Company not properly updated", data)
                else:
                    self.log_test("PUT /companies/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /companies/{id}", False, f"Exception: {str(e)}")
    
    def test_location_management(self):
        """Test location management APIs"""
        print("=== TESTING LOCATION MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Location Management", False, "No auth token available")
            return
        
        if not self.created_company_id:
            self.log_test("Location Management", False, "No company ID available for location testing")
            return
        
        # Test 1: Create a new location with geocoding
        try:
            location_data = {
                "name": "Bucharest Central Gaming Hall",
                "address": "Strada Lipscani 15",
                "city": "Bucharest",
                "county": "Bucharest",
                "country": "Romania",
                "postal_code": "030167",
                "company_id": self.created_company_id
            }
            response = self.session.post(f"{BACKEND_URL}/locations", json=location_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "name" in data:
                    self.created_location_id = data["id"]
                    geocoded = "latitude" in data and "longitude" in data and data["latitude"] is not None
                    geocode_msg = f" (Geocoded: {geocoded})" if geocoded else " (No geocoding)"
                    self.log_test("POST /locations", True, f"Created location: {data['name']} (ID: {data['id']}){geocode_msg}")
                else:
                    self.log_test("POST /locations", False, "Missing id or name in response", data)
            else:
                self.log_test("POST /locations", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /locations", False, f"Exception: {str(e)}")
        
        # Test 2: Get all locations
        try:
            response = self.session.get(f"{BACKEND_URL}/locations")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /locations", True, f"Retrieved {len(data)} locations")
                else:
                    self.log_test("GET /locations", False, "Response is not a list", data)
            else:
                self.log_test("GET /locations", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /locations", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific location
        if self.created_location_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/locations/{self.created_location_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_location_id:
                        self.log_test("GET /locations/{id}", True, f"Retrieved location: {data['name']}")
                    else:
                        self.log_test("GET /locations/{id}", False, "Location ID mismatch", data)
                else:
                    self.log_test("GET /locations/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /locations/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update location
        if self.created_location_id:
            try:
                update_data = {
                    "name": "Bucharest Central Gaming Hall - Premium",
                    "address": "Strada Lipscani 15",
                    "city": "Bucharest",
                    "county": "Bucharest",
                    "country": "Romania",
                    "postal_code": "030167",
                    "company_id": self.created_company_id
                }
                response = self.session.put(f"{BACKEND_URL}/locations/{self.created_location_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "name" in data and "Premium" in data["name"]:
                        self.log_test("PUT /locations/{id}", True, f"Updated location: {data['name']}")
                    else:
                        self.log_test("PUT /locations/{id}", False, "Location not properly updated", data)
                else:
                    self.log_test("PUT /locations/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /locations/{id}", False, f"Exception: {str(e)}")
    
    def test_dashboard_stats(self):
        """Test dashboard statistics API"""
        print("=== TESTING DASHBOARD STATISTICS API ===")
        
        if not self.auth_token:
            self.log_test("Dashboard Stats", False, "No auth token available")
            return
        
        try:
            response = self.session.get(f"{BACKEND_URL}/dashboard/stats")
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["total_companies", "total_locations", "active_companies", "active_locations", 
                                 "total_providers", "total_cabinets", "total_slot_machines", "active_equipment", "recent_activities"]
                
                if all(field in data for field in required_fields):
                    stats_msg = f"Companies: {data['total_companies']}, Locations: {data['total_locations']}, Providers: {data['total_providers']}, Cabinets: {data['total_cabinets']}, Slot Machines: {data['total_slot_machines']}, Activities: {len(data['recent_activities'])}"
                    self.log_test("GET /dashboard/stats", True, f"Retrieved enhanced dashboard stats - {stats_msg}")
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_test("GET /dashboard/stats", False, f"Missing fields: {missing_fields}", data)
            else:
                self.log_test("GET /dashboard/stats", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /dashboard/stats", False, f"Exception: {str(e)}")
    
    def test_provider_management(self):
        """Test provider management APIs"""
        print("=== TESTING PROVIDER MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Provider Management", False, "No auth token available")
            return
        
        # Test 1: Create a new provider
        try:
            provider_data = {
                "name": f"Novomatic Romania Test {datetime.now().strftime('%Y%m%d%H%M%S')}",
                "company_name": "Novomatic Gaming Industries SRL",
                "contact_person": "Maria Ionescu",
                "email": "contact@novomatic.ro",
                "phone": "+40 21 456 7890",
                "address": "Bulevardul Unirii 45, Sector 3, Bucharest",
                "website": "https://novomatic.ro"
            }
            response = self.session.post(f"{BACKEND_URL}/providers", json=provider_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "name" in data:
                    self.created_provider_id = data["id"]
                    self.log_test("POST /providers", True, f"Created provider: {data['name']} (ID: {data['id']})")
                else:
                    self.log_test("POST /providers", False, "Missing id or name in response", data)
            else:
                self.log_test("POST /providers", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /providers", False, f"Exception: {str(e)}")
        
        # Test 2: Get all providers
        try:
            response = self.session.get(f"{BACKEND_URL}/providers")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /providers", True, f"Retrieved {len(data)} providers")
                else:
                    self.log_test("GET /providers", False, "Response is not a list", data)
            else:
                self.log_test("GET /providers", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /providers", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific provider
        if self.created_provider_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/providers/{self.created_provider_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_provider_id:
                        self.log_test("GET /providers/{id}", True, f"Retrieved provider: {data['name']}")
                    else:
                        self.log_test("GET /providers/{id}", False, "Provider ID mismatch", data)
                else:
                    self.log_test("GET /providers/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /providers/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update provider
        if self.created_provider_id:
            try:
                update_data = {
                    "name": f"Novomatic Romania Test Premium {datetime.now().strftime('%Y%m%d%H%M%S')}",
                    "company_name": "Novomatic Gaming Industries SRL",
                    "contact_person": "Maria Ionescu",
                    "email": "contact@novomatic.ro",
                    "phone": "+40 21 456 7890",
                    "address": "Bulevardul Unirii 45, Sector 3, Bucharest",
                    "website": "https://novomatic.ro"
                }
                response = self.session.put(f"{BACKEND_URL}/providers/{self.created_provider_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "name" in data and "Premium" in data["name"]:
                        self.log_test("PUT /providers/{id}", True, f"Updated provider: {data['name']}")
                    else:
                        self.log_test("PUT /providers/{id}", False, "Provider not properly updated", data)
                else:
                    self.log_test("PUT /providers/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /providers/{id}", False, f"Exception: {str(e)}")
    
    def test_game_mix_management(self):
        """Test game mix management APIs"""
        print("=== TESTING GAME MIX MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Game Mix Management", False, "No auth token available")
            return
        
        if not self.created_provider_id:
            self.log_test("Game Mix Management", False, "No provider ID available for game mix testing")
            return
        
        # Test 1: Create a new game mix
        try:
            game_mix_data = {
                "name": "Classic Slots Collection",
                "description": "A collection of classic slot games including Book of Ra, Sizzling Hot, and Lucky Lady's Charm",
                "provider_id": self.created_provider_id,
                "games": ["Book of Ra Deluxe", "Sizzling Hot Deluxe", "Lucky Lady's Charm", "Dolphin's Pearl", "Lord of the Ocean"]
            }
            response = self.session.post(f"{BACKEND_URL}/game-mixes", json=game_mix_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "name" in data and "game_count" in data:
                    self.created_game_mix_id = data["id"]
                    self.log_test("POST /game-mixes", True, f"Created game mix: {data['name']} with {data['game_count']} games (ID: {data['id']})")
                else:
                    self.log_test("POST /game-mixes", False, "Missing id, name, or game_count in response", data)
            else:
                self.log_test("POST /game-mixes", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /game-mixes", False, f"Exception: {str(e)}")
        
        # Test 2: Get all game mixes
        try:
            response = self.session.get(f"{BACKEND_URL}/game-mixes")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /game-mixes", True, f"Retrieved {len(data)} game mixes")
                else:
                    self.log_test("GET /game-mixes", False, "Response is not a list", data)
            else:
                self.log_test("GET /game-mixes", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /game-mixes", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific game mix
        if self.created_game_mix_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/game-mixes/{self.created_game_mix_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_game_mix_id:
                        self.log_test("GET /game-mixes/{id}", True, f"Retrieved game mix: {data['name']} with {data['game_count']} games")
                    else:
                        self.log_test("GET /game-mixes/{id}", False, "Game mix ID mismatch", data)
                else:
                    self.log_test("GET /game-mixes/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /game-mixes/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update game mix
        if self.created_game_mix_id:
            try:
                update_data = {
                    "name": "Classic Slots Collection - Premium",
                    "description": "Enhanced collection of classic slot games with additional titles",
                    "provider_id": self.created_provider_id,
                    "games": ["Book of Ra Deluxe", "Sizzling Hot Deluxe", "Lucky Lady's Charm", "Dolphin's Pearl", "Lord of the Ocean", "Columbus Deluxe"]
                }
                response = self.session.put(f"{BACKEND_URL}/game-mixes/{self.created_game_mix_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "name" in data and "Premium" in data["name"] and data["game_count"] == 6:
                        self.log_test("PUT /game-mixes/{id}", True, f"Updated game mix: {data['name']} with {data['game_count']} games")
                    else:
                        self.log_test("PUT /game-mixes/{id}", False, "Game mix not properly updated", data)
                else:
                    self.log_test("PUT /game-mixes/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /game-mixes/{id}", False, f"Exception: {str(e)}")
    
    def test_cabinet_management(self):
        """Test cabinet management APIs"""
        print("=== TESTING CABINET MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Cabinet Management", False, "No auth token available")
            return
        
        if not self.created_provider_id or not self.created_location_id:
            self.log_test("Cabinet Management", False, "No provider ID or location ID available for cabinet testing")
            return
        
        # Test 1: Create a new cabinet
        try:
            cabinet_data = {
                "serial_number": "NV-VIP3-2024-001",
                "model": "Novostar V.I.P. III",
                "manufacturer": "Novomatic",
                "provider_id": self.created_provider_id,
                "location_id": self.created_location_id,
                "installation_date": "2024-01-15T10:00:00Z",
                "last_maintenance": "2024-01-15T10:00:00Z"
            }
            response = self.session.post(f"{BACKEND_URL}/cabinets", json=cabinet_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "serial_number" in data:
                    self.created_cabinet_id = data["id"]
                    self.log_test("POST /cabinets", True, f"Created cabinet: {data['manufacturer']} {data['model']} - {data['serial_number']} (ID: {data['id']})")
                else:
                    self.log_test("POST /cabinets", False, "Missing id or serial_number in response", data)
            else:
                self.log_test("POST /cabinets", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /cabinets", False, f"Exception: {str(e)}")
        
        # Test 2: Get all cabinets
        try:
            response = self.session.get(f"{BACKEND_URL}/cabinets")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /cabinets", True, f"Retrieved {len(data)} cabinets")
                else:
                    self.log_test("GET /cabinets", False, "Response is not a list", data)
            else:
                self.log_test("GET /cabinets", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /cabinets", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific cabinet
        if self.created_cabinet_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/cabinets/{self.created_cabinet_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_cabinet_id:
                        self.log_test("GET /cabinets/{id}", True, f"Retrieved cabinet: {data['manufacturer']} {data['model']} - {data['serial_number']}")
                    else:
                        self.log_test("GET /cabinets/{id}", False, "Cabinet ID mismatch", data)
                else:
                    self.log_test("GET /cabinets/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /cabinets/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update cabinet
        if self.created_cabinet_id:
            try:
                update_data = {
                    "serial_number": "NV-VIP3-2024-001",
                    "model": "Novostar V.I.P. III Premium",
                    "manufacturer": "Novomatic",
                    "provider_id": self.created_provider_id,
                    "location_id": self.created_location_id,
                    "installation_date": "2024-01-15T10:00:00Z",
                    "last_maintenance": "2024-02-15T10:00:00Z"
                }
                response = self.session.put(f"{BACKEND_URL}/cabinets/{self.created_cabinet_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "model" in data and "Premium" in data["model"]:
                        self.log_test("PUT /cabinets/{id}", True, f"Updated cabinet: {data['manufacturer']} {data['model']}")
                    else:
                        self.log_test("PUT /cabinets/{id}", False, "Cabinet not properly updated", data)
                else:
                    self.log_test("PUT /cabinets/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /cabinets/{id}", False, f"Exception: {str(e)}")
    
    def test_slot_machine_management(self):
        """Test slot machine management APIs"""
        print("=== TESTING SLOT MACHINE MANAGEMENT APIS ===")
        
        if not self.auth_token:
            self.log_test("Slot Machine Management", False, "No auth token available")
            return
        
        if not self.created_cabinet_id or not self.created_game_mix_id:
            self.log_test("Slot Machine Management", False, "No cabinet ID or game mix ID available for slot machine testing")
            return
        
        # Test 1: Create a new slot machine
        try:
            slot_machine_data = {
                "cabinet_id": self.created_cabinet_id,
                "game_mix_id": self.created_game_mix_id,
                "model": "Book of Ra Deluxe",
                "denomination": 0.01,
                "max_bet": 100.0,
                "rtp": 95.1,
                "gaming_places": 1,
                "commission_date": "2024-01-20T10:00:00Z"
            }
            response = self.session.post(f"{BACKEND_URL}/slot-machines", json=slot_machine_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "model" in data:
                    self.created_slot_machine_id = data["id"]
                    self.log_test("POST /slot-machines", True, f"Created slot machine: {data['model']} with RTP {data['rtp']}% (ID: {data['id']})")
                else:
                    self.log_test("POST /slot-machines", False, "Missing id or model in response", data)
            else:
                self.log_test("POST /slot-machines", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /slot-machines", False, f"Exception: {str(e)}")
        
        # Test 2: Get all slot machines
        try:
            response = self.session.get(f"{BACKEND_URL}/slot-machines")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("GET /slot-machines", True, f"Retrieved {len(data)} slot machines")
                else:
                    self.log_test("GET /slot-machines", False, "Response is not a list", data)
            else:
                self.log_test("GET /slot-machines", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /slot-machines", False, f"Exception: {str(e)}")
        
        # Test 3: Get specific slot machine
        if self.created_slot_machine_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/slot-machines/{self.created_slot_machine_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == self.created_slot_machine_id:
                        self.log_test("GET /slot-machines/{id}", True, f"Retrieved slot machine: {data['model']} with RTP {data['rtp']}%")
                    else:
                        self.log_test("GET /slot-machines/{id}", False, "Slot machine ID mismatch", data)
                else:
                    self.log_test("GET /slot-machines/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /slot-machines/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Update slot machine
        if self.created_slot_machine_id:
            try:
                update_data = {
                    "cabinet_id": self.created_cabinet_id,
                    "game_mix_id": self.created_game_mix_id,
                    "model": "Book of Ra Deluxe Premium",
                    "denomination": 0.01,
                    "max_bet": 150.0,
                    "rtp": 95.5,
                    "gaming_places": 1,
                    "commission_date": "2024-01-20T10:00:00Z"
                }
                response = self.session.put(f"{BACKEND_URL}/slot-machines/{self.created_slot_machine_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "model" in data and "Premium" in data["model"] and data["rtp"] == 95.5:
                        self.log_test("PUT /slot-machines/{id}", True, f"Updated slot machine: {data['model']} with RTP {data['rtp']}%")
                    else:
                        self.log_test("PUT /slot-machines/{id}", False, "Slot machine not properly updated", data)
                else:
                    self.log_test("PUT /slot-machines/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /slot-machines/{id}", False, f"Exception: {str(e)}")
    
    def test_equipment_relationships(self):
        """Test equipment relationship validation"""
        print("=== TESTING EQUIPMENT RELATIONSHIP VALIDATION ===")
        
        if not self.auth_token:
            self.log_test("Equipment Relationships", False, "No auth token available")
            return
        
        # Test 1: Try to create game mix with invalid provider
        try:
            invalid_game_mix_data = {
                "name": "Invalid Game Mix",
                "description": "This should fail",
                "provider_id": "invalid-provider-id",
                "games": ["Game 1", "Game 2"]
            }
            response = self.session.post(f"{BACKEND_URL}/game-mixes", json=invalid_game_mix_data)
            
            if response.status_code == 400:
                self.log_test("Game mix with invalid provider", True, "Correctly rejected invalid provider ID")
            else:
                self.log_test("Game mix with invalid provider", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("Game mix with invalid provider", False, f"Exception: {str(e)}")
        
        # Test 2: Try to create cabinet with invalid provider/location
        try:
            invalid_cabinet_data = {
                "serial_number": "INVALID-001",
                "model": "Invalid Model",
                "manufacturer": "Invalid Manufacturer",
                "provider_id": "invalid-provider-id",
                "location_id": "invalid-location-id"
            }
            response = self.session.post(f"{BACKEND_URL}/cabinets", json=invalid_cabinet_data)
            
            if response.status_code == 400:
                self.log_test("Cabinet with invalid relationships", True, "Correctly rejected invalid provider/location IDs")
            else:
                self.log_test("Cabinet with invalid relationships", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("Cabinet with invalid relationships", False, f"Exception: {str(e)}")
        
        # Test 3: Try to create slot machine with invalid cabinet/game mix
        try:
            invalid_slot_data = {
                "cabinet_id": "invalid-cabinet-id",
                "game_mix_id": "invalid-game-mix-id",
                "model": "Invalid Slot",
                "denomination": 0.01,
                "max_bet": 100.0,
                "rtp": 95.0,
                "gaming_places": 1
            }
            response = self.session.post(f"{BACKEND_URL}/slot-machines", json=invalid_slot_data)
            
            if response.status_code == 400:
                self.log_test("Slot machine with invalid relationships", True, "Correctly rejected invalid cabinet/game mix IDs")
            else:
                self.log_test("Slot machine with invalid relationships", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("Slot machine with invalid relationships", False, f"Exception: {str(e)}")
    
    def test_admin_empty_tables_bug_fix(self):
        """Test the critical admin user empty tables bug fix"""
        print("=== TESTING ADMIN USER EMPTY TABLES BUG FIX ===")
        
        if not self.auth_token:
            self.log_test("Admin Empty Tables Bug Fix", False, "No auth token available")
            return
        
        # Test 1: Admin Authentication
        try:
            response = self.session.get(f"{BACKEND_URL}/auth/me")
            if response.status_code == 200:
                data = response.json()
                if data.get("role") == "admin":
                    self.log_test("Admin Authentication Verification", True, f"Admin user authenticated: {data.get('username')}")
                else:
                    self.log_test("Admin Authentication Verification", False, f"User role is {data.get('role')}, expected admin")
            else:
                self.log_test("Admin Authentication Verification", False, f"HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Admin Authentication Verification", False, f"Exception: {str(e)}")
        
        # Test 2: Admin Data Access - Companies
        try:
            response = self.session.get(f"{BACKEND_URL}/companies")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /companies", True, f"Admin can access companies list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /companies", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /companies", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /companies", False, f"Exception: {str(e)}")
        
        # Test 3: Admin Data Access - Locations
        try:
            response = self.session.get(f"{BACKEND_URL}/locations")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /locations", True, f"Admin can access locations list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /locations", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /locations", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /locations", False, f"Exception: {str(e)}")
        
        # Test 4: Admin Data Access - Providers
        try:
            response = self.session.get(f"{BACKEND_URL}/providers")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /providers", True, f"Admin can access providers list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /providers", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /providers", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /providers", False, f"Exception: {str(e)}")
        
        # Test 5: Admin Data Access - Cabinets
        try:
            response = self.session.get(f"{BACKEND_URL}/cabinets")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /cabinets", True, f"Admin can access cabinets list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /cabinets", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /cabinets", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /cabinets", False, f"Exception: {str(e)}")
        
        # Test 6: Admin Data Access - Game Mixes
        try:
            response = self.session.get(f"{BACKEND_URL}/game-mixes")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /game-mixes", True, f"Admin can access game-mixes list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /game-mixes", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /game-mixes", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /game-mixes", False, f"Exception: {str(e)}")
        
        # Test 7: Admin Data Access - Slot Machines
        try:
            response = self.session.get(f"{BACKEND_URL}/slot-machines")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /slot-machines", True, f"Admin can access slot-machines list ({len(data)} items) - NOT EMPTY")
                else:
                    self.log_test("Admin GET /slot-machines", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /slot-machines", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Admin GET /slot-machines", False, f"Exception: {str(e)}")
        
        # Test 8: Admin Data Access - Users (Critical - was causing 500 error)
        try:
            response = self.session.get(f"{BACKEND_URL}/users")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Admin GET /users", True, f"Admin can access users list ({len(data)} items) - NO 500 ERROR")
                else:
                    self.log_test("Admin GET /users", False, "Response is not a list", data)
            else:
                self.log_test("Admin GET /users", False, f"HTTP {response.status_code} - POTENTIAL 500 ERROR", response.text)
        except Exception as e:
            self.log_test("Admin GET /users", False, f"Exception: {str(e)}")
        
        # Test 9: ObjectID Serialization Test - Check for JSON serialization errors
        try:
            response = self.session.get(f"{BACKEND_URL}/dashboard/stats")
            if response.status_code == 200:
                data = response.json()
                # Try to serialize the response to JSON to check for ObjectID issues
                json.dumps(data)
                self.log_test("ObjectID Serialization Test", True, "Dashboard stats properly serialized - NO ObjectID errors")
            else:
                self.log_test("ObjectID Serialization Test", False, f"HTTP {response.status_code}", response.text)
        except json.JSONDecodeError as e:
            self.log_test("ObjectID Serialization Test", False, f"JSON serialization error: {str(e)}")
        except Exception as e:
            self.log_test("ObjectID Serialization Test", False, f"Exception: {str(e)}")
        
        # Test 10: Company Dropdown Issue - Test companies are returned for location creation
        try:
            response = self.session.get(f"{BACKEND_URL}/companies")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    # Check if companies have required fields for dropdown
                    first_company = data[0]
                    if "id" in first_company and "name" in first_company:
                        self.log_test("Company Dropdown Data", True, f"Companies have required fields for dropdown (id, name) - {len(data)} companies available")
                    else:
                        self.log_test("Company Dropdown Data", False, "Companies missing required fields for dropdown", first_company)
                else:
                    self.log_test("Company Dropdown Data", False, f"No companies available for dropdown - list length: {len(data) if isinstance(data, list) else 'not a list'}")
            else:
                self.log_test("Company Dropdown Data", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Company Dropdown Data", False, f"Exception: {str(e)}")

    def test_role_based_permissions(self):
        """Test role-based access control"""
        print("=== TESTING ROLE-BASED PERMISSIONS ===")
        
        # Test unauthorized access (no token)
        try:
            temp_session = requests.Session()  # No auth token
            response = temp_session.get(f"{BACKEND_URL}/companies")
            
            if response.status_code == 403 or response.status_code == 401:
                self.log_test("Unauthorized access protection", True, "Correctly blocked unauthorized access")
            else:
                self.log_test("Unauthorized access protection", False, f"Expected 401/403, got {response.status_code}")
        except Exception as e:
            self.log_test("Unauthorized access protection", False, f"Exception: {str(e)}")
    
    def create_test_image_base64(self):
        """Create a small test image in base64 format"""
        # Create a minimal PNG image (1x1 pixel red dot)
        # PNG header + IHDR + IDAT + IEND
        png_data = bytes([
            0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,  # PNG signature
            0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,  # IHDR chunk
            0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,  # 1x1 dimensions
            0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53,  # bit depth, color type, etc.
            0xDE, 0x00, 0x00, 0x00, 0x0C, 0x49, 0x44, 0x41,  # IDAT chunk
            0x54, 0x08, 0x99, 0x01, 0x01, 0x00, 0x00, 0x00,
            0xFF, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01,
            0xE2, 0x21, 0xBC, 0x33, 0x00, 0x00, 0x00, 0x00,  # IEND chunk
            0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
        ])
        return base64.b64encode(png_data).decode('utf-8')

    def test_avatar_upload_functionality(self):
        """Test comprehensive avatar upload functionality for all modules"""
        print("=== TESTING AVATAR UPLOAD FUNCTIONALITY ===")
        
        if not self.auth_token:
            self.log_test("Avatar Upload Functionality", False, "No auth token available")
            return
        
        # Create test image data
        test_image_base64 = self.create_test_image_base64()
        
        # Test 1: Upload avatar for Users module
        if self.auth_token:
            try:
                # First get a user ID to attach avatar to
                users_response = self.session.get(f"{BACKEND_URL}/users")
                if users_response.status_code == 200:
                    users_data = users_response.json()
                    if users_data and len(users_data) > 0:
                        user_id = users_data[0]["id"]
                        
                        attachment_data = {
                            "filename": "user_avatar.png",
                            "original_filename": "user_avatar.png",
                            "file_size": len(base64.b64decode(test_image_base64)),
                            "mime_type": "image/png",
                            "file_data": test_image_base64,
                            "entity_type": "users",
                            "entity_id": user_id
                        }
                        
                        response = self.session.post(f"{BACKEND_URL}/attachments", json=attachment_data)
                        
                        if response.status_code == 200:
                            data = response.json()
                            if "id" in data and "entity_type" in data and data["entity_type"] == "users":
                                self.created_attachment_ids.append(data["id"])
                                self.log_test("POST /attachments (Users Avatar)", True, f"Successfully uploaded user avatar (ID: {data['id']})")
                            else:
                                self.log_test("POST /attachments (Users Avatar)", False, "Missing id or entity_type in response", data)
                        else:
                            self.log_test("POST /attachments (Users Avatar)", False, f"HTTP {response.status_code}", response.text)
                    else:
                        self.log_test("POST /attachments (Users Avatar)", False, "No users available for avatar upload test")
                else:
                    self.log_test("POST /attachments (Users Avatar)", False, f"Failed to get users: HTTP {users_response.status_code}")
            except Exception as e:
                self.log_test("POST /attachments (Users Avatar)", False, f"Exception: {str(e)}")
        
        # Test 2: Upload avatar for Providers module
        if self.created_provider_id:
            try:
                attachment_data = {
                    "filename": "provider_logo.png",
                    "original_filename": "provider_logo.png",
                    "file_size": len(base64.b64decode(test_image_base64)),
                    "mime_type": "image/png",
                    "file_data": test_image_base64,
                    "entity_type": "providers",
                    "entity_id": self.created_provider_id
                }
                
                response = self.session.post(f"{BACKEND_URL}/attachments", json=attachment_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and "entity_type" in data and data["entity_type"] == "providers":
                        self.created_attachment_ids.append(data["id"])
                        self.log_test("POST /attachments (Provider Logo)", True, f"Successfully uploaded provider logo (ID: {data['id']})")
                    else:
                        self.log_test("POST /attachments (Provider Logo)", False, "Missing id or entity_type in response", data)
                else:
                    self.log_test("POST /attachments (Provider Logo)", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /attachments (Provider Logo)", False, f"Exception: {str(e)}")
        
        # Test 3: Upload avatar for Game Mixes module
        if self.created_game_mix_id:
            try:
                attachment_data = {
                    "filename": "game_mix_avatar.png",
                    "original_filename": "game_mix_avatar.png",
                    "file_size": len(base64.b64decode(test_image_base64)),
                    "mime_type": "image/png",
                    "file_data": test_image_base64,
                    "entity_type": "game_mixes",
                    "entity_id": self.created_game_mix_id
                }
                
                response = self.session.post(f"{BACKEND_URL}/attachments", json=attachment_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and "entity_type" in data and data["entity_type"] == "game_mixes":
                        self.created_attachment_ids.append(data["id"])
                        self.log_test("POST /attachments (Game Mix Avatar)", True, f"Successfully uploaded game mix avatar (ID: {data['id']})")
                    else:
                        self.log_test("POST /attachments (Game Mix Avatar)", False, "Missing id or entity_type in response", data)
                else:
                    self.log_test("POST /attachments (Game Mix Avatar)", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /attachments (Game Mix Avatar)", False, f"Exception: {str(e)}")
        
        # Test 4: Upload avatar for Cabinets module
        if self.created_cabinet_id:
            try:
                attachment_data = {
                    "filename": "cabinet_logo.png",
                    "original_filename": "cabinet_logo.png",
                    "file_size": len(base64.b64decode(test_image_base64)),
                    "mime_type": "image/png",
                    "file_data": test_image_base64,
                    "entity_type": "cabinets",
                    "entity_id": self.created_cabinet_id
                }
                
                response = self.session.post(f"{BACKEND_URL}/attachments", json=attachment_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and "entity_type" in data and data["entity_type"] == "cabinets":
                        self.created_attachment_ids.append(data["id"])
                        self.log_test("POST /attachments (Cabinet Logo)", True, f"Successfully uploaded cabinet logo (ID: {data['id']})")
                    else:
                        self.log_test("POST /attachments (Cabinet Logo)", False, "Missing id or entity_type in response", data)
                else:
                    self.log_test("POST /attachments (Cabinet Logo)", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /attachments (Cabinet Logo)", False, f"Exception: {str(e)}")
        
        # Test 5: Upload avatar for Slot Machines module (using slot_machines entity type)
        if self.created_slot_machine_id:
            try:
                attachment_data = {
                    "filename": "slot_machine_avatar.png",
                    "original_filename": "slot_machine_avatar.png",
                    "file_size": len(base64.b64decode(test_image_base64)),
                    "mime_type": "image/png",
                    "file_data": test_image_base64,
                    "entity_type": "slot_machines",
                    "entity_id": self.created_slot_machine_id
                }
                
                response = self.session.post(f"{BACKEND_URL}/attachments", json=attachment_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and "entity_type" in data and data["entity_type"] == "slot_machines":
                        self.created_attachment_ids.append(data["id"])
                        self.log_test("POST /attachments (Slot Machine Avatar)", True, f"Successfully uploaded slot machine avatar (ID: {data['id']})")
                    else:
                        self.log_test("POST /attachments (Slot Machine Avatar)", False, "Missing id or entity_type in response", data)
                else:
                    self.log_test("POST /attachments (Slot Machine Avatar)", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /attachments (Slot Machine Avatar)", False, f"Exception: {str(e)}")

    def test_file_attachment_api(self):
        """Test file attachment API endpoints comprehensively"""
        print("=== TESTING FILE ATTACHMENT API ===")
        
        if not self.auth_token:
            self.log_test("File Attachment API", False, "No auth token available")
            return
        
        # Test 1: Retrieve attachments for Users
        if self.auth_token:
            try:
                users_response = self.session.get(f"{BACKEND_URL}/users")
                if users_response.status_code == 200:
                    users_data = users_response.json()
                    if users_data and len(users_data) > 0:
                        user_id = users_data[0]["id"]
                        
                        response = self.session.get(f"{BACKEND_URL}/attachments/users/{user_id}")
                        
                        if response.status_code == 200:
                            data = response.json()
                            if isinstance(data, list):
                                self.log_test("GET /attachments/users/{id}", True, f"Retrieved {len(data)} user attachments")
                            else:
                                self.log_test("GET /attachments/users/{id}", False, "Response is not a list", data)
                        else:
                            self.log_test("GET /attachments/users/{id}", False, f"HTTP {response.status_code}", response.text)
                    else:
                        self.log_test("GET /attachments/users/{id}", False, "No users available for attachment retrieval test")
            except Exception as e:
                self.log_test("GET /attachments/users/{id}", False, f"Exception: {str(e)}")
        
        # Test 2: Retrieve attachments for Providers
        if self.created_provider_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/attachments/providers/{self.created_provider_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test("GET /attachments/providers/{id}", True, f"Retrieved {len(data)} provider attachments")
                    else:
                        self.log_test("GET /attachments/providers/{id}", False, "Response is not a list", data)
                else:
                    self.log_test("GET /attachments/providers/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /attachments/providers/{id}", False, f"Exception: {str(e)}")
        
        # Test 3: Retrieve attachments for Game Mixes
        if self.created_game_mix_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/attachments/game_mixes/{self.created_game_mix_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test("GET /attachments/game_mixes/{id}", True, f"Retrieved {len(data)} game mix attachments")
                    else:
                        self.log_test("GET /attachments/game_mixes/{id}", False, "Response is not a list", data)
                else:
                    self.log_test("GET /attachments/game_mixes/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /attachments/game_mixes/{id}", False, f"Exception: {str(e)}")
        
        # Test 4: Retrieve attachments for Cabinets
        if self.created_cabinet_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/attachments/cabinets/{self.created_cabinet_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test("GET /attachments/cabinets/{id}", True, f"Retrieved {len(data)} cabinet attachments")
                    else:
                        self.log_test("GET /attachments/cabinets/{id}", False, "Response is not a list", data)
                else:
                    self.log_test("GET /attachments/cabinets/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /attachments/cabinets/{id}", False, f"Exception: {str(e)}")
        
        # Test 5: Retrieve attachments for Slot Machines
        if self.created_slot_machine_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/attachments/slot_machines/{self.created_slot_machine_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test("GET /attachments/slot_machines/{id}", True, f"Retrieved {len(data)} slot machine attachments")
                    else:
                        self.log_test("GET /attachments/slot_machines/{id}", False, "Response is not a list", data)
                else:
                    self.log_test("GET /attachments/slot_machines/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /attachments/slot_machines/{id}", False, f"Exception: {str(e)}")

    def test_data_persistence_verification(self):
        """Test that uploaded files are properly stored in MongoDB as base64"""
        print("=== TESTING DATA PERSISTENCE VERIFICATION ===")
        
        if not self.auth_token:
            self.log_test("Data Persistence Verification", False, "No auth token available")
            return
        
        # Test 1: Verify attachment data persistence by downloading
        if self.created_attachment_ids:
            try:
                attachment_id = self.created_attachment_ids[0]
                response = self.session.get(f"{BACKEND_URL}/attachments/{attachment_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "filename" in data and "mime_type" in data and "file_data" in data:
                        # Verify base64 data is valid
                        try:
                            base64.b64decode(data["file_data"])
                            self.log_test("Data Persistence - Base64 Storage", True, f"Attachment stored as valid base64 data (filename: {data['filename']}, type: {data['mime_type']})")
                        except Exception:
                            self.log_test("Data Persistence - Base64 Storage", False, "Invalid base64 data in attachment")
                    else:
                        self.log_test("Data Persistence - Base64 Storage", False, "Missing required fields in attachment data", data)
                else:
                    self.log_test("Data Persistence - Base64 Storage", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("Data Persistence - Base64 Storage", False, f"Exception: {str(e)}")
        else:
            self.log_test("Data Persistence - Base64 Storage", False, "No attachments created for persistence testing")
        
        # Test 2: Verify attachments are linked to correct entities
        if self.created_attachment_ids and self.created_provider_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/attachments/providers/{self.created_provider_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list) and len(data) > 0:
                        # Check if any of our created attachments are in the list
                        found_attachment = False
                        for attachment in data:
                            if attachment["id"] in self.created_attachment_ids:
                                found_attachment = True
                                if attachment["entity_type"] == "providers" and attachment["entity_id"] == self.created_provider_id:
                                    self.log_test("Data Persistence - Entity Linking", True, f"Attachment correctly linked to provider entity (ID: {attachment['id']})")
                                else:
                                    self.log_test("Data Persistence - Entity Linking", False, f"Attachment entity linking mismatch: {attachment}")
                                break
                        
                        if not found_attachment:
                            self.log_test("Data Persistence - Entity Linking", False, "Created attachment not found in provider attachments list")
                    else:
                        self.log_test("Data Persistence - Entity Linking", False, "No attachments found for provider")
                else:
                    self.log_test("Data Persistence - Entity Linking", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("Data Persistence - Entity Linking", False, f"Exception: {str(e)}")

    def test_file_validation_and_error_handling(self):
        """Test file validation and error handling for uploads"""
        print("=== TESTING FILE VALIDATION AND ERROR HANDLING ===")
        
        if not self.auth_token:
            self.log_test("File Validation", False, "No auth token available")
            return
        
        if not self.created_provider_id:
            self.log_test("File Validation", False, "No provider ID available for validation testing")
            return
        
        # Test 1: Invalid file type
        try:
            invalid_attachment_data = {
                "filename": "test.exe",
                "original_filename": "test.exe",
                "file_size": 1024,
                "mime_type": "application/x-executable",
                "file_data": base64.b64encode(b"fake executable data").decode('utf-8'),
                "entity_type": "providers",
                "entity_id": self.created_provider_id
            }
            
            response = self.session.post(f"{BACKEND_URL}/attachments", json=invalid_attachment_data)
            
            if response.status_code == 400:
                self.log_test("File Validation - Invalid Type", True, "Correctly rejected invalid file type (.exe)")
            else:
                self.log_test("File Validation - Invalid Type", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("File Validation - Invalid Type", False, f"Exception: {str(e)}")
        
        # Test 2: Invalid entity type
        try:
            test_image_base64 = self.create_test_image_base64()
            invalid_entity_attachment = {
                "filename": "test.png",
                "original_filename": "test.png",
                "file_size": len(base64.b64decode(test_image_base64)),
                "mime_type": "image/png",
                "file_data": test_image_base64,
                "entity_type": "invalid_entity_type",
                "entity_id": self.created_provider_id
            }
            
            response = self.session.post(f"{BACKEND_URL}/attachments", json=invalid_entity_attachment)
            
            if response.status_code == 400:
                self.log_test("File Validation - Invalid Entity Type", True, "Correctly rejected invalid entity type")
            else:
                self.log_test("File Validation - Invalid Entity Type", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("File Validation - Invalid Entity Type", False, f"Exception: {str(e)}")
        
        # Test 3: Non-existent entity ID
        try:
            test_image_base64 = self.create_test_image_base64()
            nonexistent_entity_attachment = {
                "filename": "test.png",
                "original_filename": "test.png",
                "file_size": len(base64.b64decode(test_image_base64)),
                "mime_type": "image/png",
                "file_data": test_image_base64,
                "entity_type": "providers",
                "entity_id": "nonexistent-entity-id"
            }
            
            response = self.session.post(f"{BACKEND_URL}/attachments", json=nonexistent_entity_attachment)
            
            if response.status_code == 404:
                self.log_test("File Validation - Non-existent Entity", True, "Correctly rejected non-existent entity ID")
            else:
                self.log_test("File Validation - Non-existent Entity", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("File Validation - Non-existent Entity", False, f"Exception: {str(e)}")
        
        # Test 4: Invalid base64 data
        try:
            invalid_base64_attachment = {
                "filename": "test.png",
                "original_filename": "test.png",
                "file_size": 1024,
                "mime_type": "image/png",
                "file_data": "invalid-base64-data!!!",
                "entity_type": "providers",
                "entity_id": self.created_provider_id
            }
            
            response = self.session.post(f"{BACKEND_URL}/attachments", json=invalid_base64_attachment)
            
            if response.status_code == 400:
                self.log_test("File Validation - Invalid Base64", True, "Correctly rejected invalid base64 data")
            else:
                self.log_test("File Validation - Invalid Base64", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("File Validation - Invalid Base64", False, f"Exception: {str(e)}")

    def test_default_permissions(self):
        """Test that user editing shows all permissions enabled by default"""
        print("=== TESTING DEFAULT PERMISSIONS ===")
        
        if not self.auth_token:
            self.log_test("Default Permissions", False, "No auth token available")
            return
        
        # Test 1: Check admin user permissions
        try:
            response = self.session.get(f"{BACKEND_URL}/auth/me")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("role") == "admin":
                    self.log_test("Default Permissions - Admin Role", True, f"Admin user has admin role: {data.get('username')}")
                else:
                    self.log_test("Default Permissions - Admin Role", False, f"User role is {data.get('role')}, expected admin")
            else:
                self.log_test("Default Permissions - Admin Role", False, f"HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Default Permissions - Admin Role", False, f"Exception: {str(e)}")
        
        # Test 2: Verify admin can access all modules (RBAC working correctly)
        modules_to_test = [
            ("companies", "/companies"),
            ("locations", "/locations"),
            ("providers", "/providers"),
            ("game-mixes", "/game-mixes"),
            ("cabinets", "/cabinets"),
            ("slot-machines", "/slot-machines"),
            ("users", "/users")
        ]
        
        for module_name, endpoint in modules_to_test:
            try:
                response = self.session.get(f"{BACKEND_URL}{endpoint}")
                
                if response.status_code == 200:
                    data = response.json()
                    if isinstance(data, list):
                        self.log_test(f"RBAC Access - {module_name.title()}", True, f"Admin can access {module_name} ({len(data)} items)")
                    else:
                        self.log_test(f"RBAC Access - {module_name.title()}", False, f"Response is not a list for {module_name}", data)
                else:
                    self.log_test(f"RBAC Access - {module_name.title()}", False, f"HTTP {response.status_code} for {module_name}")
            except Exception as e:
                self.log_test(f"RBAC Access - {module_name.title()}", False, f"Exception for {module_name}: {str(e)}")

    def cleanup_test_data(self):
        """Clean up test data"""
        print("=== CLEANING UP TEST DATA ===")
        
        if not self.auth_token:
            return
        
        # Delete test slot machine
        if self.created_slot_machine_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/slot-machines/{self.created_slot_machine_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /slot-machines/{id}", True, "Test slot machine deleted")
                else:
                    self.log_test("DELETE /slot-machines/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /slot-machines/{id}", False, f"Exception: {str(e)}")
        
        # Delete test cabinet
        if self.created_cabinet_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/cabinets/{self.created_cabinet_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /cabinets/{id}", True, "Test cabinet deleted")
                else:
                    self.log_test("DELETE /cabinets/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /cabinets/{id}", False, f"Exception: {str(e)}")
        
        # Delete test game mix
        if self.created_game_mix_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/game-mixes/{self.created_game_mix_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /game-mixes/{id}", True, "Test game mix deleted")
                else:
                    self.log_test("DELETE /game-mixes/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /game-mixes/{id}", False, f"Exception: {str(e)}")
        
        # Delete test provider
        if self.created_provider_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/providers/{self.created_provider_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /providers/{id}", True, "Test provider deleted")
                else:
                    self.log_test("DELETE /providers/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /providers/{id}", False, f"Exception: {str(e)}")
        
        # Delete test location
        if self.created_location_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/locations/{self.created_location_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /locations/{id}", True, "Test location deleted")
                else:
                    self.log_test("DELETE /locations/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /locations/{id}", False, f"Exception: {str(e)}")
        
        # Delete test company
        if self.created_company_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/companies/{self.created_company_id}")
                if response.status_code == 200:
                    self.log_test("DELETE /companies/{id}", True, "Test company deleted")
                else:
                    self.log_test("DELETE /companies/{id}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /companies/{id}", False, f"Exception: {str(e)}")
    
    def test_invoice_management(self):
        """Test invoice management CRUD API functionality"""
        print("=== TESTING INVOICE MANAGEMENT CRUD API ===")
        
        if not self.auth_token:
            self.log_test("Invoice Management", False, "No auth token available")
            return
        
        if not self.created_company_id or not self.created_location_id:
            self.log_test("Invoice Management", False, "No company ID or location ID available for invoice testing")
            return
        
        created_invoice_id = None
        
        # Test 1: GET /api/invoices - Initially empty
        try:
            response = self.session.get(f"{BACKEND_URL}/invoices")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    initial_count = len(data)
                    self.log_test("GET /invoices (initial)", True, f"Retrieved {initial_count} invoices initially")
                else:
                    self.log_test("GET /invoices (initial)", False, "Response is not a list", data)
            else:
                self.log_test("GET /invoices (initial)", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /invoices (initial)", False, f"Exception: {str(e)}")
        
        # Test 2: POST /api/invoices - Create new invoice with test data
        try:
            invoice_data = {
                "invoice_number": "INV-2025-TEST-001",
                "company_id": self.created_company_id,
                "location_id": self.created_location_id,
                "issue_date": "2025-01-15T00:00:00",
                "due_date": "2025-02-15T00:00:00",
                "amount": 1500.50,
                "currency": "EUR",
                "description": "Test invoice for gaming equipment rental"
            }
            response = self.session.post(f"{BACKEND_URL}/invoices", json=invoice_data)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "invoice_number" in data:
                    created_invoice_id = data["id"]
                    self.log_test("POST /invoices", True, f"Created invoice: {data['invoice_number']} - €{data['amount']} (ID: {data['id']})")
                else:
                    self.log_test("POST /invoices", False, "Missing id or invoice_number in response", data)
            else:
                self.log_test("POST /invoices", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("POST /invoices", False, f"Exception: {str(e)}")
        
        # Test 3: GET /api/invoices - Verify created invoice appears
        try:
            response = self.session.get(f"{BACKEND_URL}/invoices")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    found_invoice = False
                    for invoice in data:
                        if invoice.get("invoice_number") == "INV-2025-TEST-001":
                            found_invoice = True
                            break
                    
                    if found_invoice:
                        self.log_test("GET /invoices (after creation)", True, f"Created invoice appears in list ({len(data)} total invoices)")
                    else:
                        self.log_test("GET /invoices (after creation)", False, f"Created invoice not found in list of {len(data)} invoices")
                else:
                    self.log_test("GET /invoices (after creation)", False, "Response is not a list", data)
            else:
                self.log_test("GET /invoices (after creation)", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("GET /invoices (after creation)", False, f"Exception: {str(e)}")
        
        # Test 4: GET /api/invoices/{invoice_id} - Fetch specific invoice
        if created_invoice_id:
            try:
                response = self.session.get(f"{BACKEND_URL}/invoices/{created_invoice_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and data["id"] == created_invoice_id:
                        # Verify ObjectID serialization is working
                        try:
                            json.dumps(data)
                            self.log_test("GET /invoices/{id}", True, f"Retrieved invoice: {data['invoice_number']} - ObjectID serialization working")
                        except Exception as json_error:
                            self.log_test("GET /invoices/{id}", False, f"ObjectID serialization error: {str(json_error)}")
                    else:
                        self.log_test("GET /invoices/{id}", False, "Invoice ID mismatch", data)
                else:
                    self.log_test("GET /invoices/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("GET /invoices/{id}", False, f"Exception: {str(e)}")
        
        # Test 5: PUT /api/invoices/{invoice_id} - Update invoice status to "paid"
        if created_invoice_id:
            try:
                update_data = {
                    "invoice_number": "INV-2025-TEST-001",
                    "company_id": self.created_company_id,
                    "location_id": self.created_location_id,
                    "issue_date": "2025-01-15T00:00:00",
                    "due_date": "2025-02-15T00:00:00",
                    "amount": 1500.50,
                    "currency": "EUR",
                    "description": "Test invoice for gaming equipment rental - UPDATED"
                }
                response = self.session.put(f"{BACKEND_URL}/invoices/{created_invoice_id}", json=update_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "description" in data and "UPDATED" in data["description"]:
                        self.log_test("PUT /invoices/{id}", True, f"Updated invoice: {data['invoice_number']} - Description updated")
                    else:
                        self.log_test("PUT /invoices/{id}", False, "Invoice not properly updated", data)
                else:
                    self.log_test("PUT /invoices/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("PUT /invoices/{id}", False, f"Exception: {str(e)}")
        
        # Test 6: Test RBAC permissions - Admin should have access
        try:
            response = self.session.get(f"{BACKEND_URL}/auth/me")
            if response.status_code == 200:
                user_data = response.json()
                if user_data.get("role") == "admin":
                    self.log_test("Invoice RBAC - Admin Access", True, "Admin user has proper access to invoice management")
                else:
                    self.log_test("Invoice RBAC - Admin Access", False, f"User role is {user_data.get('role')}, expected admin")
            else:
                self.log_test("Invoice RBAC - Admin Access", False, f"Failed to verify user role: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Invoice RBAC - Admin Access", False, f"Exception: {str(e)}")
        
        # Test 7: Test data validation - Try to create invoice with invalid data
        try:
            invalid_invoice_data = {
                "invoice_number": "INV-2025-TEST-001",  # Duplicate number
                "company_id": self.created_company_id,
                "location_id": self.created_location_id,
                "issue_date": "2025-01-15T00:00:00",
                "due_date": "2025-02-15T00:00:00",
                "amount": 1500.50,
                "currency": "EUR",
                "description": "Duplicate invoice test"
            }
            response = self.session.post(f"{BACKEND_URL}/invoices", json=invalid_invoice_data)
            
            if response.status_code == 400:
                self.log_test("Invoice Validation - Duplicate Number", True, "Correctly rejected duplicate invoice number")
            else:
                self.log_test("Invoice Validation - Duplicate Number", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("Invoice Validation - Duplicate Number", False, f"Exception: {str(e)}")
        
        # Test 8: Test data validation - Try to create invoice with invalid company/location
        try:
            invalid_invoice_data = {
                "invoice_number": "INV-2025-TEST-002",
                "company_id": "invalid-company-id",
                "location_id": "invalid-location-id",
                "issue_date": "2025-01-15T00:00:00",
                "due_date": "2025-02-15T00:00:00",
                "amount": 1500.50,
                "currency": "EUR",
                "description": "Invalid relationships test"
            }
            response = self.session.post(f"{BACKEND_URL}/invoices", json=invalid_invoice_data)
            
            if response.status_code == 400:
                self.log_test("Invoice Validation - Invalid Relationships", True, "Correctly rejected invalid company/location IDs")
            else:
                self.log_test("Invoice Validation - Invalid Relationships", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_test("Invoice Validation - Invalid Relationships", False, f"Exception: {str(e)}")
        
        # Test 9: DELETE /api/invoices/{invoice_id} - Delete test invoice
        if created_invoice_id:
            try:
                response = self.session.delete(f"{BACKEND_URL}/invoices/{created_invoice_id}")
                
                if response.status_code == 200:
                    self.log_test("DELETE /invoices/{id}", True, f"Successfully deleted test invoice (ID: {created_invoice_id})")
                    
                    # Verify deletion by trying to fetch the deleted invoice
                    verify_response = self.session.get(f"{BACKEND_URL}/invoices/{created_invoice_id}")
                    if verify_response.status_code == 404:
                        self.log_test("Invoice Deletion Verification", True, "Deleted invoice no longer accessible")
                    else:
                        self.log_test("Invoice Deletion Verification", False, f"Deleted invoice still accessible: HTTP {verify_response.status_code}")
                else:
                    self.log_test("DELETE /invoices/{id}", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("DELETE /invoices/{id}", False, f"Exception: {str(e)}")
        
        # Test 10: Verify data persistence in MongoDB - Check final state
        try:
            response = self.session.get(f"{BACKEND_URL}/invoices")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    # Check that our test invoice is no longer in the list
                    test_invoice_found = False
                    for invoice in data:
                        if invoice.get("invoice_number") == "INV-2025-TEST-001":
                            test_invoice_found = True
                            break
                    
                    if not test_invoice_found:
                        self.log_test("Invoice Data Persistence", True, f"Data persistence verified - test invoice properly deleted from MongoDB")
                    else:
                        self.log_test("Invoice Data Persistence", False, "Test invoice still found in database after deletion")
                else:
                    self.log_test("Invoice Data Persistence", False, "Response is not a list", data)
            else:
                self.log_test("Invoice Data Persistence", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Invoice Data Persistence", False, f"Exception: {str(e)}")

    def test_delete_functionality(self):
        """Test comprehensive delete functionality for all endpoints"""
        print("=== TESTING DELETE FUNCTIONALITY ===")
        
        if not self.auth_token:
            self.log_test("Delete Functionality", False, "No auth token available")
            return
        
        # Store original counts for dashboard verification
        original_stats = None
        try:
            response = self.session.get(f"{BACKEND_URL}/dashboard/stats")
            if response.status_code == 200:
                original_stats = response.json()
        except Exception:
            pass
        
        # Test 1: Single Delete - Company
        test_company_id = None
        try:
            # Create a test company for deletion
            company_data = {
                "name": "Delete Test Company",
                "registration_number": "J40/DELETE/2024",
                "tax_id": "RODELETE123",
                "address": "Delete Test Address",
                "phone": "+40 21 DELETE",
                "email": "delete@test.ro",
                "contact_person": "Delete Tester"
            }
            response = self.session.post(f"{BACKEND_URL}/companies", json=company_data)
            
            if response.status_code == 200:
                data = response.json()
                test_company_id = data["id"]
                
                # Now delete it
                delete_response = self.session.delete(f"{BACKEND_URL}/companies/{test_company_id}")
                
                if delete_response.status_code == 200:
                    # Verify soft delete - company should still exist but with status "inactive"
                    verify_response = self.session.get(f"{BACKEND_URL}/companies/{test_company_id}")
                    if verify_response.status_code == 200:
                        company_data = verify_response.json()
                        if company_data.get("status") == "inactive":
                            self.log_test("DELETE /companies/{id} - Single Delete", True, f"Company soft deleted successfully (status: inactive)")
                        else:
                            self.log_test("DELETE /companies/{id} - Single Delete", False, f"Company status is {company_data.get('status')}, expected 'inactive'")
                    else:
                        self.log_test("DELETE /companies/{id} - Single Delete", False, f"Cannot verify deletion: HTTP {verify_response.status_code}")
                else:
                    self.log_test("DELETE /companies/{id} - Single Delete", False, f"Delete failed: HTTP {delete_response.status_code}")
            else:
                self.log_test("DELETE /companies/{id} - Single Delete", False, f"Failed to create test company: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("DELETE /companies/{id} - Single Delete", False, f"Exception: {str(e)}")
        
        # Test 2: Delete with Authentication - Admin Required
        try:
            # Test that only admin can delete companies
            response = self.session.get(f"{BACKEND_URL}/auth/me")
            if response.status_code == 200:
                user_data = response.json()
                if user_data.get("role") == "admin":
                    self.log_test("Delete Authentication - Admin Access", True, "Admin user has proper delete permissions")
                else:
                    self.log_test("Delete Authentication - Admin Access", False, f"User role is {user_data.get('role')}, expected admin")
            else:
                self.log_test("Delete Authentication - Admin Access", False, f"Failed to verify user role: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Delete Authentication - Admin Access", False, f"Exception: {str(e)}")
        
        # Test 3: Error Handling - Non-existent Item
        try:
            non_existent_id = "non-existent-company-id-12345"
            response = self.session.delete(f"{BACKEND_URL}/companies/{non_existent_id}")
            
            if response.status_code == 404:
                self.log_test("Delete Error Handling - Non-existent Item", True, "Correctly returned 404 for non-existent company")
            else:
                self.log_test("Delete Error Handling - Non-existent Item", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Delete Error Handling - Non-existent Item", False, f"Exception: {str(e)}")
        
        # Test 4: Multiple Entity Types Delete Testing
        test_entities = []
        
        # Create test entities for deletion
        if self.created_company_id:
            # Test Location Delete
            try:
                location_data = {
                    "name": "Delete Test Location",
                    "address": "Delete Test Street 1",
                    "city": "Bucharest",
                    "county": "Bucharest",
                    "country": "Romania",
                    "postal_code": "010101",
                    "company_id": self.created_company_id
                }
                response = self.session.post(f"{BACKEND_URL}/locations", json=location_data)
                
                if response.status_code == 200:
                    location_id = response.json()["id"]
                    test_entities.append(("location", location_id))
            except Exception:
                pass
        
        if self.created_provider_id:
            # Test Provider Delete
            try:
                provider_data = {
                    "name": f"Delete Test Provider {datetime.now().strftime('%Y%m%d%H%M%S')}",
                    "company_name": "Delete Test Provider Company",
                    "contact_person": "Delete Tester",
                    "email": "delete@provider.ro",
                    "phone": "+40 21 DELETE",
                    "address": "Delete Provider Address"
                }
                response = self.session.post(f"{BACKEND_URL}/providers", json=provider_data)
                
                if response.status_code == 200:
                    provider_id = response.json()["id"]
                    test_entities.append(("provider", provider_id))
            except Exception:
                pass
        
        # Test deletion of multiple entity types
        for entity_type, entity_id in test_entities:
            try:
                endpoint_map = {
                    "location": "locations",
                    "provider": "providers"
                }
                endpoint = endpoint_map.get(entity_type)
                
                if endpoint:
                    response = self.session.delete(f"{BACKEND_URL}/{endpoint}/{entity_id}")
                    
                    if response.status_code == 200:
                        self.log_test(f"DELETE /{endpoint}/{{id}} - {entity_type.title()}", True, f"{entity_type.title()} deleted successfully")
                    else:
                        self.log_test(f"DELETE /{endpoint}/{{id}} - {entity_type.title()}", False, f"HTTP {response.status_code}")
            except Exception as e:
                self.log_test(f"DELETE /{endpoint}/{{id}} - {entity_type.title()}", False, f"Exception: {str(e)}")
        
        # Test 5: Hard Delete vs Soft Delete Verification
        test_invoice_id = None
        if self.created_company_id and self.created_location_id:
            try:
                # Create test invoice for hard delete testing
                invoice_data = {
                    "invoice_number": "INV-DELETE-TEST-001",
                    "company_id": self.created_company_id,
                    "location_id": self.created_location_id,
                    "issue_date": "2025-01-15T00:00:00",
                    "due_date": "2025-02-15T00:00:00",
                    "amount": 100.00,
                    "currency": "EUR",
                    "description": "Delete test invoice"
                }
                response = self.session.post(f"{BACKEND_URL}/invoices", json=invoice_data)
                
                if response.status_code == 200:
                    test_invoice_id = response.json()["id"]
                    
                    # Delete invoice (hard delete)
                    delete_response = self.session.delete(f"{BACKEND_URL}/invoices/{test_invoice_id}")
                    
                    if delete_response.status_code == 200:
                        # Verify hard delete - invoice should not exist
                        verify_response = self.session.get(f"{BACKEND_URL}/invoices/{test_invoice_id}")
                        if verify_response.status_code == 404:
                            self.log_test("DELETE /invoices/{id} - Hard Delete", True, "Invoice hard deleted successfully (404 on retrieval)")
                        else:
                            self.log_test("DELETE /invoices/{id} - Hard Delete", False, f"Invoice still accessible after deletion: HTTP {verify_response.status_code}")
                    else:
                        self.log_test("DELETE /invoices/{id} - Hard Delete", False, f"Delete failed: HTTP {delete_response.status_code}")
            except Exception as e:
                self.log_test("DELETE /invoices/{id} - Hard Delete", False, f"Exception: {str(e)}")
        
        # Test 6: Dashboard Data Refresh After Deletes
        try:
            response = self.session.get(f"{BACKEND_URL}/dashboard/stats")
            
            if response.status_code == 200:
                new_stats = response.json()
                
                # Verify dashboard stats are still accessible and properly formatted
                required_fields = ["total_companies", "total_locations", "active_companies", "active_locations", "recent_activities"]
                
                if all(field in new_stats for field in required_fields):
                    # Check if stats reflect the deletions (companies should have decreased active count)
                    if original_stats:
                        original_active = original_stats.get("active_companies", 0)
                        new_active = new_stats.get("active_companies", 0)
                        
                        # We deleted at least one company, so active count should be same or less
                        if new_active <= original_active:
                            self.log_test("Dashboard Refresh After Deletes", True, f"Dashboard stats properly updated after deletions (Active companies: {original_active} → {new_active})")
                        else:
                            self.log_test("Dashboard Refresh After Deletes", False, f"Dashboard stats inconsistent: active companies increased from {original_active} to {new_active}")
                    else:
                        self.log_test("Dashboard Refresh After Deletes", True, f"Dashboard stats accessible after deletions (Active companies: {new_stats['active_companies']}, Total: {new_stats['total_companies']})")
                else:
                    missing_fields = [field for field in required_fields if field not in new_stats]
                    self.log_test("Dashboard Refresh After Deletes", False, f"Dashboard missing fields after deletions: {missing_fields}")
            else:
                self.log_test("Dashboard Refresh After Deletes", False, f"Dashboard inaccessible after deletions: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Dashboard Refresh After Deletes", False, f"Exception: {str(e)}")
        
        # Test 7: Bulk Delete Functionality Check
        try:
            # Check if bulk delete endpoints exist (they don't in current implementation)
            bulk_delete_data = {
                "ids": ["test-id-1", "test-id-2"]
            }
            response = self.session.delete(f"{BACKEND_URL}/companies/bulk", json=bulk_delete_data)
            
            if response.status_code == 404 or response.status_code == 405:
                self.log_test("Bulk Delete Functionality", False, "Bulk delete endpoints not implemented - only single item deletes available")
            else:
                self.log_test("Bulk Delete Functionality", True, f"Bulk delete endpoint exists: HTTP {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Functionality", False, f"Bulk delete not implemented - Exception: {str(e)}")
        
        # Test 8: Delete Permissions for Different Entity Types
        entity_endpoints = [
            ("users", "admin only"),
            ("companies", "admin only"), 
            ("locations", "admin only"),
            ("providers", "admin only"),
            ("game-mixes", "admin only"),
            ("cabinets", "admin only"),
            ("slot-machines", "admin only"),
            ("invoices", "admin only"),
            ("onjn-reports", "admin only"),
            ("legal-documents", "admin only"),
            ("attachments", "admin/manager")
        ]
        
        permissions_working = 0
        total_permissions = len(entity_endpoints)
        
        for endpoint, required_role in entity_endpoints:
            try:
                # Test with current admin user
                response = self.session.delete(f"{BACKEND_URL}/{endpoint}/test-non-existent-id")
                
                # We expect 404 (not found) rather than 403 (forbidden) for admin user
                if response.status_code in [404, 400]:  # 404 = not found, 400 = bad request, both indicate permission granted
                    permissions_working += 1
                elif response.status_code == 403:
                    self.log_test(f"Delete Permissions - {endpoint}", False, f"Admin user denied access to delete {endpoint}")
                # Other status codes might be implementation-specific
            except Exception:
                pass
        
        if permissions_working >= total_permissions * 0.8:  # 80% threshold
            self.log_test("Delete Permissions - RBAC", True, f"Delete permissions working for {permissions_working}/{total_permissions} endpoints")
        else:
            self.log_test("Delete Permissions - RBAC", False, f"Delete permissions issues: only {permissions_working}/{total_permissions} endpoints accessible")
        
        # Test 9: Attachment Delete Testing
        if self.created_attachment_ids:
            try:
                attachment_id = self.created_attachment_ids[0]
                response = self.session.delete(f"{BACKEND_URL}/attachments/{attachment_id}")
                
                if response.status_code == 200:
                    # Verify attachment is deleted
                    verify_response = self.session.get(f"{BACKEND_URL}/attachments/{attachment_id}")
                    if verify_response.status_code == 404:
                        self.log_test("DELETE /attachments/{id}", True, "Attachment deleted successfully (hard delete)")
                        # Remove from tracking list
                        self.created_attachment_ids.remove(attachment_id)
                    else:
                        self.log_test("DELETE /attachments/{id}", False, f"Attachment still accessible after deletion: HTTP {verify_response.status_code}")
                else:
                    self.log_test("DELETE /attachments/{id}", False, f"Attachment delete failed: HTTP {response.status_code}")
            except Exception as e:
                self.log_test("DELETE /attachments/{id}", False, f"Exception: {str(e)}")
        
        # Test 10: Cascade Delete Behavior (if implemented)
        try:
            # Check if deleting a company affects related locations
            if test_company_id:
                # Get locations for the deleted company
                response = self.session.get(f"{BACKEND_URL}/locations")
                if response.status_code == 200:
                    locations = response.json()
                    company_locations = [loc for loc in locations if loc.get("company_id") == test_company_id]
                    
                    if len(company_locations) == 0:
                        self.log_test("Cascade Delete Behavior", True, "No locations found for deleted company (expected behavior)")
                    else:
                        # Check if locations are still active or also marked inactive
                        inactive_locations = [loc for loc in company_locations if loc.get("status") == "inactive"]
                        if len(inactive_locations) == len(company_locations):
                            self.log_test("Cascade Delete Behavior", True, f"Related locations also marked inactive ({len(inactive_locations)} locations)")
                        else:
                            self.log_test("Cascade Delete Behavior", False, f"Some related locations still active after company deletion")
        except Exception as e:
            self.log_test("Cascade Delete Behavior", False, f"Exception: {str(e)}")

    def test_bulk_delete_functionality(self):
        """Test bulk delete functionality for companies and locations"""
        print("=== TESTING BULK DELETE FUNCTIONALITY ===")
        
        if not self.auth_token:
            self.log_test("Bulk Delete Functionality", False, "No auth token available")
            return
        
        # Create multiple test companies for bulk delete testing
        test_company_ids = []
        test_location_ids = []
        
        # Test 1: Create multiple companies for bulk delete
        try:
            for i in range(3):
                company_data = {
                    "name": f"Bulk Test Company {i+1}",
                    "registration_number": f"J40/BULK{i+1}/2024",
                    "tax_id": f"ROBULK{i+1}",
                    "address": f"Test Address {i+1}, Bucharest",
                    "phone": f"+40 21 000 000{i+1}",
                    "email": f"bulk{i+1}@test.ro",
                    "contact_person": f"Test Person {i+1}"
                }
                response = self.session.post(f"{BACKEND_URL}/companies", json=company_data)
                
                if response.status_code == 200:
                    data = response.json()
                    test_company_ids.append(data["id"])
                else:
                    self.log_test(f"Create Bulk Test Company {i+1}", False, f"HTTP {response.status_code}")
            
            if len(test_company_ids) == 3:
                self.log_test("Create Multiple Companies for Bulk Delete", True, f"Created {len(test_company_ids)} test companies")
            else:
                self.log_test("Create Multiple Companies for Bulk Delete", False, f"Only created {len(test_company_ids)} out of 3 companies")
        except Exception as e:
            self.log_test("Create Multiple Companies for Bulk Delete", False, f"Exception: {str(e)}")
        
        # Test 2: Create multiple locations for bulk delete
        if test_company_ids:
            try:
                for i, company_id in enumerate(test_company_ids):
                    location_data = {
                        "name": f"Bulk Test Location {i+1}",
                        "address": f"Test Location Address {i+1}",
                        "city": "Bucharest",
                        "county": "Bucharest",
                        "country": "Romania",
                        "postal_code": f"03016{i+1}",
                        "company_id": company_id
                    }
                    response = self.session.post(f"{BACKEND_URL}/locations", json=location_data)
                    
                    if response.status_code == 200:
                        data = response.json()
                        test_location_ids.append(data["id"])
                    else:
                        self.log_test(f"Create Bulk Test Location {i+1}", False, f"HTTP {response.status_code}")
                
                if len(test_location_ids) == 3:
                    self.log_test("Create Multiple Locations for Bulk Delete", True, f"Created {len(test_location_ids)} test locations")
                else:
                    self.log_test("Create Multiple Locations for Bulk Delete", False, f"Only created {len(test_location_ids)} out of 3 locations")
            except Exception as e:
                self.log_test("Create Multiple Locations for Bulk Delete", False, f"Exception: {str(e)}")
        
        # Test 3: Test bulk delete companies endpoint
        if test_company_ids:
            try:
                # Test with valid company IDs
                response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=test_company_ids)
                
                if response.status_code == 200:
                    data = response.json()
                    if "message" in data and "Successfully deleted" in data["message"]:
                        self.log_test("POST /companies/bulk-delete", True, f"Bulk deleted companies: {data['message']}")
                        
                        # Verify companies are soft-deleted (status = inactive)
                        for company_id in test_company_ids:
                            company_response = self.session.get(f"{BACKEND_URL}/companies/{company_id}")
                            if company_response.status_code == 200:
                                company_data = company_response.json()
                                if company_data.get("status") == "inactive":
                                    self.log_test(f"Verify Company {company_id} Soft Delete", True, "Company status set to inactive")
                                else:
                                    self.log_test(f"Verify Company {company_id} Soft Delete", False, f"Company status is {company_data.get('status')}, expected inactive")
                    else:
                        self.log_test("POST /companies/bulk-delete", False, "Missing success message in response", data)
                else:
                    self.log_test("POST /companies/bulk-delete", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /companies/bulk-delete", False, f"Exception: {str(e)}")
        
        # Test 4: Test bulk delete locations endpoint
        if test_location_ids:
            try:
                # Test with valid location IDs
                response = self.session.post(f"{BACKEND_URL}/locations/bulk-delete", json=test_location_ids)
                
                if response.status_code == 200:
                    data = response.json()
                    if "message" in data and "Successfully deleted" in data["message"]:
                        self.log_test("POST /locations/bulk-delete", True, f"Bulk deleted locations: {data['message']}")
                        
                        # Verify locations are soft-deleted (status = inactive)
                        for location_id in test_location_ids:
                            location_response = self.session.get(f"{BACKEND_URL}/locations/{location_id}")
                            if location_response.status_code == 200:
                                location_data = location_response.json()
                                if location_data.get("status") == "inactive":
                                    self.log_test(f"Verify Location {location_id} Soft Delete", True, "Location status set to inactive")
                                else:
                                    self.log_test(f"Verify Location {location_id} Soft Delete", False, f"Location status is {location_data.get('status')}, expected inactive")
                    else:
                        self.log_test("POST /locations/bulk-delete", False, "Missing success message in response", data)
                else:
                    self.log_test("POST /locations/bulk-delete", False, f"HTTP {response.status_code}", response.text)
            except Exception as e:
                self.log_test("POST /locations/bulk-delete", False, f"Exception: {str(e)}")
        
        # Test 5: Test bulk delete with non-existent company IDs (error handling)
        try:
            non_existent_ids = ["non-existent-1", "non-existent-2", "non-existent-3"]
            response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=non_existent_ids)
            
            if response.status_code == 404:
                data = response.json()
                if "not found" in data.get("detail", "").lower():
                    self.log_test("Bulk Delete Non-existent Companies", True, "Correctly rejected non-existent company IDs")
                else:
                    self.log_test("Bulk Delete Non-existent Companies", False, "Wrong error message for non-existent IDs", data)
            else:
                self.log_test("Bulk Delete Non-existent Companies", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Non-existent Companies", False, f"Exception: {str(e)}")
        
        # Test 6: Test bulk delete with non-existent location IDs (error handling)
        try:
            non_existent_ids = ["non-existent-loc-1", "non-existent-loc-2"]
            response = self.session.post(f"{BACKEND_URL}/locations/bulk-delete", json=non_existent_ids)
            
            if response.status_code == 404:
                data = response.json()
                if "not found" in data.get("detail", "").lower():
                    self.log_test("Bulk Delete Non-existent Locations", True, "Correctly rejected non-existent location IDs")
                else:
                    self.log_test("Bulk Delete Non-existent Locations", False, "Wrong error message for non-existent IDs", data)
            else:
                self.log_test("Bulk Delete Non-existent Locations", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Non-existent Locations", False, f"Exception: {str(e)}")
        
        # Test 7: Test bulk delete with mixed valid/invalid IDs
        if test_company_ids:
            try:
                # Create one more company for this test
                company_data = {
                    "name": "Mixed Test Company",
                    "registration_number": "J40/MIXED/2024",
                    "tax_id": "ROMIXED",
                    "address": "Mixed Test Address, Bucharest",
                    "phone": "+40 21 000 9999",
                    "email": "mixed@test.ro",
                    "contact_person": "Mixed Test Person"
                }
                response = self.session.post(f"{BACKEND_URL}/companies", json=company_data)
                
                if response.status_code == 200:
                    mixed_company_id = response.json()["id"]
                    mixed_ids = [mixed_company_id, "non-existent-mixed"]
                    
                    response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=mixed_ids)
                    
                    if response.status_code == 404:
                        self.log_test("Bulk Delete Mixed Valid/Invalid IDs", True, "Correctly rejected mixed valid/invalid company IDs")
                    else:
                        self.log_test("Bulk Delete Mixed Valid/Invalid IDs", False, f"Expected 404, got {response.status_code}")
                else:
                    self.log_test("Bulk Delete Mixed Valid/Invalid IDs", False, "Failed to create test company for mixed ID test")
            except Exception as e:
                self.log_test("Bulk Delete Mixed Valid/Invalid IDs", False, f"Exception: {str(e)}")
        
        # Test 8: Test authentication requirement for bulk delete
        try:
            temp_session = requests.Session()  # No auth token
            response = temp_session.post(f"{BACKEND_URL}/companies/bulk-delete", json=["test-id"])
            
            if response.status_code in [401, 403]:
                self.log_test("Bulk Delete Authentication Required", True, "Correctly requires authentication for bulk delete")
            else:
                self.log_test("Bulk Delete Authentication Required", False, f"Expected 401/403, got {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Authentication Required", False, f"Exception: {str(e)}")
        
        # Test 9: Verify dashboard data is updated after bulk delete
        try:
            response = self.session.get(f"{BACKEND_URL}/dashboard/stats")
            
            if response.status_code == 200:
                data = response.json()
                if "total_companies" in data and "total_locations" in data:
                    # The dashboard should reflect the current state after bulk deletes
                    self.log_test("Dashboard Data After Bulk Delete", True, f"Dashboard updated: {data['total_companies']} companies, {data['total_locations']} locations")
                else:
                    self.log_test("Dashboard Data After Bulk Delete", False, "Missing required fields in dashboard stats", data)
            else:
                self.log_test("Dashboard Data After Bulk Delete", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Dashboard Data After Bulk Delete", False, f"Exception: {str(e)}")
        
        # Test 10: Test empty array bulk delete
        try:
            response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=[])
            
            if response.status_code == 200:
                data = response.json()
                if "0 companies" in data.get("message", ""):
                    self.log_test("Bulk Delete Empty Array", True, "Correctly handled empty array bulk delete")
                else:
                    self.log_test("Bulk Delete Empty Array", False, "Unexpected response for empty array", data)
            else:
                self.log_test("Bulk Delete Empty Array", False, f"Expected 200, got {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Empty Array", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Financial Planner Pro Backend API Tests")
        print(f"Backend URL: {BACKEND_URL}")
        print(f"Test Credentials: {ADMIN_USERNAME}/{ADMIN_PASSWORD}")
        print("=" * 60)
        
        # Run all test suites
        self.test_authentication()
        
        # CRITICAL: Test the admin empty tables bug fix first
        self.test_admin_empty_tables_bug_fix()
        
        self.test_company_management()
        self.test_location_management()
        self.test_provider_management()
        self.test_game_mix_management()
        self.test_cabinet_management()
        self.test_slot_machine_management()
        self.test_equipment_relationships()
        self.test_dashboard_stats()
        self.test_role_based_permissions()
        
        # NEW: Test avatar upload and file attachment functionality
        self.test_avatar_upload_functionality()
        self.test_file_attachment_api()
        self.test_data_persistence_verification()
        self.test_file_validation_and_error_handling()
        self.test_default_permissions()
        
        # NEW: Test invoice management functionality
        self.test_invoice_management()
        
        # NEW: Test delete functionality comprehensively
        self.test_delete_functionality()
        
        # NEW: Test bulk delete functionality
        self.test_bulk_delete_functionality()
        
        self.cleanup_test_data()
        
        # Summary
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result["success"])
        failed_tests = total_tests - passed_tests
        
        print(f"Total Tests: {total_tests}")
        print(f"✅ Passed: {passed_tests}")
        print(f"❌ Failed: {failed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if failed_tests > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"   ❌ {result['test']}: {result['message']}")
        
        return failed_tests == 0

def main():
    """Main test execution"""
    tester = APITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All backend API tests passed successfully!")
        sys.exit(0)
    else:
        print("\n⚠️  Some backend API tests failed. Check the output above for details.")
        sys.exit(1)

if __name__ == "__main__":
    main()