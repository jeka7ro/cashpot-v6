const fs = require('fs');
const path = require('path');

// Initialize server with Google Sheets data
function initData() {
  try {
    console.log('🚀 Initializing server data...');
    
    // Sample data
    const dataStore = {
      invoices: [
        {
          id: "inv-134862",
          invoice_number: "INV-TEST-134862",
          serial_number: "134862",
          amount: 5000,
          status: "paid",
          created_date: new Date().toISOString(),
          attachments: [
            {
              name: "invoice-134862.pdf",
              type: "application/pdf",
              url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            }
          ]
        }
      ],
      metrology: [],
      companies: [
        { id: '1', name: 'Base44 SRL', registration_number: 'J40/1234/2020', tax_id: 'RO12345678', address: 'București, România', phone: '0212345678', email: 'contact@base44.com', contact_person: 'John Doe', status: 'active', created_date: new Date().toISOString() }
      ],
      locations: [
        { id: 'loc-1', name: 'Pitesti', address: 'Pitesti, România', company_id: '1', phone: '0212345678', email: 'pitesti@base44.com', created_date: new Date().toISOString() },
        { id: 'loc-2', name: 'Valcea', address: 'Valcea, România', company_id: '1', phone: '0212345678', email: 'valcea@base44.com', created_date: new Date().toISOString() },
        { id: 'loc-3', name: 'Craiova', address: 'Craiova, România', company_id: '1', phone: '0212345678', email: 'craiova@base44.com', created_date: new Date().toISOString() },
        { id: 'loc-4', name: 'Ploiesti (centru)', address: 'Ploiesti, România', company_id: '1', phone: '0212345678', email: 'ploiesti@base44.com', created_date: new Date().toISOString() },
        { id: 'loc-5', name: 'Ploiesti (nord)', address: 'Ploiesti, România', company_id: '1', phone: '0212345678', email: 'ploiesti-nord@base44.com', created_date: new Date().toISOString() }
      ],
      providers: [
        { id: 'prov-1', name: 'EGT', contact_person: 'EGT Contact', phone: '0043123456789', email: 'egt@example.com', created_date: new Date().toISOString() },
        { id: 'prov-2', name: 'Alfastreet', contact_person: 'Alfastreet Contact', phone: '0043123456789', email: 'alfastreet@example.com', created_date: new Date().toISOString() },
        { id: 'prov-3', name: 'Novomatic', contact_person: 'Novomatic Contact', phone: '0043123456789', email: 'novomatic@example.com', created_date: new Date().toISOString() },
        { id: 'prov-4', name: 'IGT', contact_person: 'IGT Contact', phone: '0043123456789', email: 'igt@example.com', created_date: new Date().toISOString() },
        { id: 'prov-5', name: 'InterBlock', contact_person: 'InterBlock Contact', phone: '0043123456789', email: 'interblock@example.com', created_date: new Date().toISOString() },
        { id: 'prov-6', name: 'Amusnet', contact_person: 'Amusnet Contact', phone: '0043123456789', email: 'amusnet@example.com', created_date: new Date().toISOString() },
        { id: 'prov-7', name: 'Casino Technology', contact_person: 'Casino Technology Contact', phone: '0043123456789', email: 'casinotechnology@example.com', created_date: new Date().toISOString() }
      ],
      cabinets: [],
      gameMixes: [],
      slotMachines: [],
      users: [],
      jackpots: []
    };
    
    // Save to data.json
    const dataFile = path.join(__dirname, 'data.json');
    fs.writeFileSync(dataFile, JSON.stringify(dataStore, null, 2));
    
    console.log('✅ Data initialized successfully!');
    console.log(`📁 Data saved to: ${dataFile}`);
    
  } catch (error) {
    console.error('❌ Error initializing data:', error);
  }
}

// Run initialization
initData();
