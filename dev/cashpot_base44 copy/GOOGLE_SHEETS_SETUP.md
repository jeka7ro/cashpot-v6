# Google Sheets API Setup

Pentru a accesa datele reale din Google Sheets, trebuie să configurezi Google API key-ul:

## Pași pentru configurare:

1. **Mergi la Google Cloud Console**: https://console.cloud.google.com/

2. **Creează un proiect nou** sau selectează unul existent

3. **Activează Google Sheets API**:
   - Mergi la "APIs & Services" > "Library"
   - Caută "Google Sheets API"
   - Click "Enable"

4. **Creează API Key**:
   - Mergi la "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copiază API key-ul generat

5. **Configurează API key-ul în aplicație**:
   - Deschide `src/config/googleSheets.js`
   - Înlocuiește `YOUR_GOOGLE_API_KEY_HERE` cu API key-ul tău real

6. **Configurează permisiunile pentru Google Sheet**:
   - Deschide Google Sheet-ul tău
   - Click "Share" în colțul din dreapta sus
   - Adaugă API key-ul ca "Viewer" sau "Editor"

## Structura Google Sheet-ului:

Sheet-ul trebuie să aibă următoarele tab-uri cu datele corespunzătoare:
- **Locations** (A:G) - 5 locații
- **Providers** (A:F) - 7 provideri  
- **Cabinets** (A:H) - 18 cabinete
- **GameMixes** (A:F) - 24 game mixes
- **SlotMachines** (A:L) - 310 sloturi

După configurare, aplicația va importa datele reale din Google Sheets în loc de datele inventate.
