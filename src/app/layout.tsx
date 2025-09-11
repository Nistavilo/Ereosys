import { Navigation } from '@/components/Navigation';
import './globals.css'
import React from 'react';

export const metadata = {
  title: 'LuvianTech | Website',
  description: 'LuvianTech websitesi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#0a0a0f] text-white font-sans flex flex-col min-h-screen">
        <Navigation/> 
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}
