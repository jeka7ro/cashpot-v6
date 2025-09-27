const fetch = require('node-fetch');

const API_BASE_URL = 'http://localhost:3001/api';

// Initialize server with Google Sheets data
async function initServer() {
  try {
    console.log('🚀 Initializing server with Google Sheets data...');
    
    // Import Google Sheets data
    const { getGoogleSheetsData, parseSlotMachineData, getUniqueLocations, getUniqueManufacturers, getUniqueGameMixes, getUniqueCabinets } = require('./src/config/googleSheets.js');
    
    // Get slot machine data
    const sheetData = await getGoogleSheetsData('SlotMachines!A:E');
    const slotMachines = parseSlotMachineData(sheetData);
    const locations = getUniqueLocations(slotMachines);
    const providers = getUniqueManufacturers(slotMachines);
    const gameMixes = getUniqueGameMixes(slotMachines);
    const cabinets = getUniqueCabinets(slotMachines);
    
    // Create test invoice
    const testInvoice = {
      invoice_number: "INV-TEST-134862",
      serial_number: "134862",
      amount: 5000,
      status: "paid",
      attachments: [
        {
          name: "invoice-134862.pdf",
          type: "application/pdf",
          url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        }
      ]
    };
    
    // Post data to server
    await postData('/locations', locations);
    await postData('/providers', providers);
    await postData('/gameMixes', gameMixes);
    await postData('/cabinets', cabinets);
    await postData('/slotMachines', slotMachines);
    await postData('/invoices', [testInvoice]);
    
    console.log('✅ Server initialized successfully!');
    
  } catch (error) {
    console.error('❌ Error initializing server:', error);
  }
}

async function postData(endpoint, data) {
  try {
    for (const item of data) {
      await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      });
    }
    console.log(`✅ Posted ${data.length} items to ${endpoint}`);
  } catch (error) {
    console.error(`❌ Error posting to ${endpoint}:`, error);
  }
}

// Run initialization
initServer();
