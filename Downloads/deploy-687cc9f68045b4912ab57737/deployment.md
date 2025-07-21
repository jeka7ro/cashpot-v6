# CASHPOT Deployment Guide

## Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables:
   - `REACT_APP_BACKEND_URL`: Your Railway backend URL

## Backend Deployment (Railway)
1. Connect your GitHub repository to Railway
2. Set environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `SECRET_KEY`: Your JWT secret key

## Database Setup (MongoDB Atlas)
1. Create cluster at mongodb.com
2. Get connection string
3. Add to Railway environment variables

## Post-deployment Steps
1. Update CORS settings in backend
2. Test all functionality
3. Set up custom domain (optional)