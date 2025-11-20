# INSAI - Institutional Grade AI Trading Platform

A modern, SEO-optimized landing page for INSAI trading platform built with Next.js 14, React, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** - Server-side rendering and static generation
- 🎯 **SEO Optimized** - Comprehensive metadata and OpenGraph tags
- 🎨 Modern UI with gradient effects and animations
- 📱 Fully responsive design
- ⚡ Fast performance with automatic optimization
- 🤖 Three AI trading strategies
- 📊 Live performance tracking table
- 🔍 Search engine friendly

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## SEO Features

- ✅ Server-side rendering for better SEO
- ✅ Optimized metadata tags
- ✅ OpenGraph tags for social sharing
- ✅ Twitter card support
- ✅ Structured data ready
- ✅ Robots configuration
- ✅ Fast page loads with automatic optimization

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
npm start
```

The production server will run on port 3000.

## Deploy to Render

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and deploy

### Option 2: Manual Setup

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** insai-landing
   - **Environment:** Node
   - **Branch:** main
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Node Version:** 18 or higher
5. Click "Create Web Service"

Your site will be live at: `https://insai-landing.onrender.com` (or your custom domain)

## Project Structure

```
├── app/
│   ├── layout.jsx       # Root layout with SEO metadata
│   ├── page.jsx         # Main landing page
│   └── globals.css      # Global styles
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── render.yaml          # Render deployment config
```

## Environment Variables

No environment variables required for this project.

## Future API Integration

When adding API calls in the future:

```javascript
// In any component
const [data, setData] = useState([]);

useEffect(() => {
  fetch('https://api.insai.com/strategies')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

You can also create API routes in Next.js:
```
app/api/strategies/route.js
```

## License

All rights reserved - INSAI Trading Technologies
