# Delish Menu MVP

A simple digital restaurant menu website.

## Setup

1. Install dependencies: `npm install`
2. Set up MongoDB:
   - For local: Install and start MongoDB
   - For cloud (recommended): Create a MongoDB Atlas account, create a cluster, and get the connection string
   - Copy `.env.example` to `.env` and set `MONGODB_URI` to your connection string
3. Seed sample data: `node seed.js`
4. Start server: `npm start`

## Usage

- Visit `http://localhost:3000/menu/cafe-delish` to view the menu.

## API

- GET `/api/menu/:slug` - Get restaurant menu data