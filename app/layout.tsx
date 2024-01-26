import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import {Providers} from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'collum',
  description: 'Lewis & Alexandria Collum',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className='dark'>
            <body>
                <Providers>
                    {children}
                </Providers>
                <Analytics/>
            </body>
        </html>
    );
}
