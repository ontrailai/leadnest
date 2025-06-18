#!/bin/bash

echo "🚀 Setting up FacebookL..."

# Create .env files from examples
echo "📝 Creating environment files..."
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and add your OpenAI API key and Apify token"
echo "2. Add your Facebook session cookie to config/cookie.json"
echo "3. Start the backend: cd backend && npm run dev"
echo "4. Start the frontend: cd frontend && npm run dev"
echo "5. Open http://localhost:3000"
echo ""
echo "To run in test mode (with mock data), use: cd backend && npm run dev:test"
