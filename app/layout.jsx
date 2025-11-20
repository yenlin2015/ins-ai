import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INSAI - Institutional Grade AI Trading Platform',
  description: 'Leverage multi-source data feeds and transformer models to automate your trading on OKX. Professional AI trading tools, now for everyone.',
  keywords: ['AI trading', 'algorithmic trading', 'cryptocurrency', 'OKX', 'trading bot', 'institutional trading', 'automated trading'],
  authors: [{ name: 'INSAI Trading Technologies' }],
  openGraph: {
    title: 'INSAI - Institutional Grade AI Trading',
    description: 'Professional AI trading strategies with up to 142% APY. Automated trading on OKX with advanced AI models.',
    type: 'website',
    locale: 'en_US',
    siteName: 'INSAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSAI - Institutional Grade AI Trading',
    description: 'Professional AI trading strategies with up to 142% APY',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
