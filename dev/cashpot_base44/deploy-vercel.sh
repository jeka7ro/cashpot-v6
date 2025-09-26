#!/bin/bash

echo "🚀 Deploying server to Vercel..."

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel@latest
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "✅ Server deployed to Vercel!"
echo "Update the SERVER_URL in serverClient.js with the new URL"
