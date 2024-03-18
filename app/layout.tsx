import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Nav from './components/nav'

import styles from './components/styles/nav.module.scss'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '800']
})

export const bric = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '800']
})

export const metadata: Metadata = {
  title: 'McMillin Design Co.',
  description: 'Boutique branding and graphic design studio',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header} />
        {children}
        {/* <footer className={styles.footer}>
            <a className={styles.contactbutton} href="#">Contact</a>
        </footer> */}
        <Nav />
        
      </body>
    </html>
  )
}
