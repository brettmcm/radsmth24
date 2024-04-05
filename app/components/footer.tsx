'use client'

import styles from './styles/nav.module.scss'

import Image from 'next/image';

import React, { useRef, useEffect, useState } from "react";
import { motion, motionValue, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';

export default function Footer() {

    const ref = useRef(null);
    const { scrollY } = useScroll();
    const scrollPositionFromBottom = motionValue(0); // Initialized as a motionValue

    useEffect(() => {
        const calculateScrollPosition = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const positionFromBottom = scrollHeight - scrollY.get();
            scrollPositionFromBottom.set(positionFromBottom); // Update the motionValue directly
        };

        calculateScrollPosition();
        const unsubscribe = scrollY.onChange(calculateScrollPosition);

        return () => {
            unsubscribe();
        };
    }, [scrollY, scrollPositionFromBottom]);
    
    const opacity = useTransform(
        scrollPositionFromBottom,
        [0, 150],
        [1, 0]
    );



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