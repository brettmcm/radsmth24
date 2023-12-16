import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

import styles from './components/styles/nav.module.scss'
import Nav from './components/nav'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '500', '800']
})

export const bric = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '400', '800']
})

export const metadata: Metadata = {
  title: 'Radsmth, Inc.',
  description: 'Boutique branding and graphic design studio',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bric.className}>
        <header className={styles.header}>
            {/* <Link href="/" className={styles.logo}>R<span className={styles.fullName}>adsmth</span>—</Link> */}
        </header>
        {children}
        <Nav />
        <footer className={styles.footer}>
            <a className={styles.contactbutton} href="#">Contact</a>
        </footer>
      </body>
    </html>
  )
}
