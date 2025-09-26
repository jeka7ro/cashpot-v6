# Cashpot v6 - Deployment Instructions

## CRITICAL FIX: Data Synchronization Between Browsers

### Problem Solved
- **BEFORE**: Data saved in one browser was not visible in another browser (localStorage issue)
- **AFTER**: All data is now synchronized through a backend server

### Backend Server
- **Location**: `server/index.js`
- **Port**: 3001
- **API Endpoints**: `/api/data/{entity}`
- **Data Storage**: JSON file (`server/data.json`)

### Frontend Changes
- **File**: `src/api/entities.js`
- **Client**: `src/api/serverClient.js`
- **Fallback**: If server is unavailable, falls back to localStorage

### Deployment Steps

#### 1. Deploy Backend Server
```bash
# Option 1: Railway
railway login
railway init
railway up

# Option 2: Heroku
heroku create cashpot-backend
git push heroku main

# Option 3: Vercel
vercel --prod
```

#### 2. Update Frontend Environment
```bash
# Set server URL in environment
export REACT_APP_SERVER_URL=https://your-backend-url.com
```

#### 3. Deploy Frontend
```bash
npm run build
# Deploy to GitHub Pages, Netlify, or Vercel
```

### Testing Data Synchronization
1. Open application in Browser A
2. Add some data (companies, slots, etc.)
3. Open application in Browser B
4. Data should be visible immediately

### Server Endpoints
- `GET /api/health` - Health check
- `GET /api/data/{entity}` - List all items
- `POST /api/data/{entity}` - Create new item
- `PUT /api/data/{entity}/{id}` - Update item
- `DELETE /api/data/{entity}/{id}` - Delete item

### Data Persistence
- All data is stored in `server/data.json`
- Data persists between server restarts
- Multiple users can access the same data
- Real-time synchronization between browsers
