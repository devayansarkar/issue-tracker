#!/bin/bash

echo "Starting build for issue tracker..."
echo "Building frontend..."
cd frontend
yarn build
cd ..
cd backend
echo "Running backend..."
rails s
echo "Done..."