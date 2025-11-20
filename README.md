# INSAI - Institutional Grade AI Trading Platform

A modern, responsive landing page for INSAI trading platform built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern UI with gradient effects and animations
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Three AI trading strategies
- 📊 Live performance tracking table
- 🤖 AI architecture visualization

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and deploy

### Option 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name:** insai-landing
   - **Branch:** main
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click "Create Static Site"

Your site will be live at: `https://insai-landing.onrender.com` (or your custom domain)

## Environment Variables

No environment variables required for this project.

## License

All rights reserved - INSAI Trading Technologies
