#!/bin/bash

echo "🔍 Finding process using port 5000..."

# Find the process using port 5000
PID=$(lsof -ti:5000)

if [ -z "$PID" ]; then
    echo "❌ No process found using port 5000"
else
    echo "✅ Found process $PID using port 5000"
    echo "Killing process..."
    kill -9 $PID
    echo "✅ Process killed. You can now start the backend server."
fi

# Alternative method if lsof doesn't work
echo ""
echo "If the above didn't work, try:"
echo "1. sudo lsof -i :5000"
echo "2. sudo kill -9 [PID]"
echo ""
echo "Or use a different port by editing backend/.env"
