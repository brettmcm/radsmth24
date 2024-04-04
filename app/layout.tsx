import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Nav from './components/nav'
import Footer from './components/footer';

import styles from './components/styles/nav.module.scss'


export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '800']
})

export const metadata: Metadata = {
  title: 'McMillin Design Co.',
  description: 'Boutique branding and graphic design studio',
}



export const branding = true
export const design = true
export const editorial = true
export const ux = false



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mrd1sel.css" />
      </head>
      <body className={inter.className}>
        <header className={styles.header} />
        {children}
        <Nav />
        <Footer />
      </body>
    </html>
  )
}
