# CashPot - Setup Instructions

## Prerequisites

1. **Node.js** (version 18 or higher)
2. **MongoDB** (local installation or MongoDB Atlas)
3. **Google Sheets API** access

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp src/config/env.example .env
```

3. Edit `.env` file with your actual values:
```env
# Google Sheets API Configuration
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=cashpot

# Base44 SDK Configuration
BASE44_APP_ID=6884ea526a03104fa9ddda18
```

## Google Sheets Setup

1. Create a Google Sheet with the following structure:

### Users Sheet
| A (id) | B (username) | C (email) | D (first_name) | E (last_name) | F (role) | G (is_active) | H (avatar) |
|--------|-------------|-----------|----------------|---------------|----------|---------------|------------|
| 1      | admin       | admin@... | Administrator  | Sistem        | admin    | true          |            |
| 2      | manager1    | mgr@...   | Manager        | Test          | manager  | true          |            |

### Companies Sheet
| A (id) | B (name) | C (registration_number) | D (tax_id) | E (address) | F (phone) | G (email) | H (contact_person) | I (status) | J (created_date) |

### Locations Sheet
| A (id) | B (name) | C (address) | D (company_id) | E (phone) | F (email) | G (created_date) |

### Providers Sheet
| A (id) | B (name) | C (contact_person) | D (phone) | E (email) | F (created_date) |

2. Get your Google Sheets API key:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google Sheets API
   - Create credentials (API Key)
   - Add the API key to your `.env` file

3. Get your Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```

## MongoDB Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The default connection string should work: `mongodb://localhost:27017`

### MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string and update `MONGODB_URI` in `.env`

## Data Synchronization

To sync data from Google Sheets to MongoDB:

```bash
# Sync all data
node src/scripts/syncData.js

# Or sync specific data types
node -e "import('./src/scripts/syncData.js').then(m => m.syncUsers())"
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:5000`

## API Structure

The application now uses real data sources:

- **Google Sheets** as the primary data source
- **MongoDB** as a cache/backup for better performance
- **Automatic sync** between Google Sheets and MongoDB

## User Management

Users are now managed through:
- Google Sheets for data storage
- MongoDB for fast access
- Real API endpoints for CRUD operations

## Troubleshooting

1. **Google Sheets API errors**: Check your API key and spreadsheet permissions
2. **MongoDB connection errors**: Verify MongoDB is running and connection string is correct
3. **Data sync issues**: Check network connectivity and API quotas

## Development Notes

- All data is synchronized between Google Sheets and MongoDB
- Google Sheets serves as the "source of truth"
- MongoDB provides fast local access
- The system falls back to MongoDB if Google Sheets is unavailable

