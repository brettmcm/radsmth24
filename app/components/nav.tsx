'use client'

import {useState,} from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './styles/nav.module.scss'


export function Logo() {
  return (
    <svg version="1.1" className={styles.logomark} x="0px" y="0px" viewBox="0 0 221 193.2">
      <path d="M34,193.2H1c-0.6,0-1-0.4-1-1V48.6c0-0.2,0.1-0.4,0.2-0.6l34-47.6C34.4,0.2,34.7,0,35,0h33c0.6,0,1,0.4,1,1v143.6
        c0,0.2-0.1,0.4-0.2,0.6l-34,47.6C34.6,193,34.3,193.2,34,193.2z M110.8,192.8l34-47.6c0.1-0.2,0.2-0.4,0.2-0.6v-48V1
        c0-0.6-0.4-1-1-1h-33c-0.3,0-0.6,0.2-0.8,0.4L76.1,48C76,48.2,76,48.4,76,48.6v143.6c0,0.6,0.4,1,1,1h33
        C110.3,193.2,110.6,193,110.8,192.8z M186.7,192.8l34-47.6c0.1-0.2,0.2-0.4,0.2-0.6V1c0-0.6-0.4-1-1-1h-33c-0.3,0-0.6,0.2-0.8,0.4
        l-34,47.6c-0.1,0.2-0.2,0.4-0.2,0.6v143.6c0,0.6,0.4,1,1,1h33C186.3,193.2,186.6,193,186.7,192.8z"/>
    </svg>
  )
}

export function Back() {
  return (
    <svg version="1.1" className={styles.backarrow} x="0px" y="0px" viewBox="0 0 182.7 146.5">
    <path d="M141.8,68.2H63.3c-1,0-1.5-1.3-0.8-1.9L90.8,40c0.5-0.4,0.5-1.1,0.1-1.6l-5.4-5.8c-0.4-0.5-1.1-0.5-1.6-0.1L41,72.4
	c-0.5,0.4-0.5,1.2,0,1.6l42.8,39.8c0.5,0.4,1.2,0.4,1.6-0.1l5.4-5.8c0.4-0.5,0.4-1.2-0.1-1.6L62.6,80.3c-0.7-0.7-0.3-1.9,0.8-1.9
	h78.5c0.6,0,1.1-0.5,1.1-1.1v-7.9C142.9,68.7,142.4,68.2,141.8,68.2z"/>
    </svg>
  )
}

export default function Nav(props: any) {

  const [width, setWidth] = useState(38);
  const [pos, setPos] = useState(0);

  const pathname = usePathname();

  const handleClick = (event: React.ChangeEvent<any>) => {
    setWidth(event.target.offsetWidth);
    setPos(event.target.offsetLeft);
  };


    return (
        <nav id="nav" className={styles.nav}>
          <Link href="/">
            {pathname === "/" ? "" : <Logo /> }
          </Link>

          <div className={styles.menu}>
            <Link href="/about">About</Link>
            <Link href="mailto:brett@radsmth.com">Contact</Link>
          </div>
        </nav>
    )

}