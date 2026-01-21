import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'EduManager - Plateforme de gestion pédagogique',
  description: 'Gérez vos formations avec simplicité et efficacité. Une plateforme centralisée pour les directeurs, formateurs et étudiants.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Education-Logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Education-Logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
