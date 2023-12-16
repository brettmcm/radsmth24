'use client'

import {useState} from 'react';
import Link from 'next/link';
import styles from './styles/nav.module.scss'

export default function Nav(props: any) {

  const [width, setWidth] = useState(38);
  const [pos, setPos] = useState(0);

  const handleClick = (event: React.ChangeEvent<any>) => {
    setWidth(event.target.offsetWidth);
    setPos(event.target.offsetLeft);
  };


    return (
        <nav id="nav" className={styles.nav}>
          <div className={styles.highlighter} style={{ left: `${pos + "px"}`, width: `${width + "px"}`}}></div>
          <Link href="/" className={`${styles.navLink} ${styles.logo}`} onClick={handleClick}>R—</Link>
          <Link href="/brands" className={styles.navLink} onClick={handleClick}>Branding</Link>
          <Link href="/craft" className={styles.navLink} onClick={handleClick}>Craft</Link>
          <Link href="/services" className={styles.navLink} onClick={handleClick}>Studio</Link>
        </nav>
    )

}