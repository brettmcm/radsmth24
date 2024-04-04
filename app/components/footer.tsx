'use client'

import styles from './styles/nav.module.scss'

import Image from 'next/image';

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function Footer() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({})
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [0, 0, 1],
    )

    return (
        <motion.footer
            ref={ref}
            style={{opacity: opacity}}
            className={styles.footer}>
                <div className={styles.tag}>Follow the fun</div>
                <div className={styles.smallprint}>
                    <Link href="https://instagram.com/radsmth">
                        <Image
                            src="/logo-instagram.svg"
                            width={20}
                            height={20}
                            alt="Instagram Logo"
                            />
                    </Link>
                    ©2024 McMilling Design Co.
                </div>
                <Image
                    src="/logowall.svg"
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={styles.footerImg}
                    />
        </motion.footer>
    )

}