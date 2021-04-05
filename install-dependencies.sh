#!/bin/bash

echo "Installing dependencies ..."
echo "Installing dependencies for frontend..."
cd frontend
yarn install
cd ..
cd backend
echo "Installing dependencies for backend..."
bundle install
echo "Done..."