#!/bin/bash

echo "🚀 LibaSpace Setup Script"
echo "========================="
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm is installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "🔨 Building shared package..."
cd packages/shared
pnpm build
cd ../..

echo ""
echo "📝 Setting up environment files..."

# Backend env
if [ ! -f apps/server/.env ]; then
    cp server.env.example apps/server/.env
    echo "✅ Created apps/server/.env (please edit with your API keys)"
else
    echo "⚠️  apps/server/.env already exists"
fi

# Frontend env
if [ ! -f apps/web/.env.local ]; then
    cp web.env.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local"
else
    echo "⚠️  apps/web/.env.local already exists"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit apps/server/.env with your LiveKit and Tavus API keys"
echo "2. Run 'pnpm dev' to start both servers"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "For detailed instructions, see SETUP.md"

