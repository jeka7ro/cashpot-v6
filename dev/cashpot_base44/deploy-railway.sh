#!/bin/bash

echo "🚀 Deploying to Railway..."

# Install Railway CLI if not installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli@latest
fi

# Login to Railway (this will open browser)
echo "Please login to Railway in the browser that opens..."
railway login

# Deploy the project
echo "Deploying project to Railway..."
railway up

echo "✅ Deployment complete!"
echo "Your server will be available at the URL shown above."
