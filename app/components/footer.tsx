'use client'

import styles from './styles/nav.module.scss'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        // target: ref,
        // offset: ["start start", "end end"],
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [0, 0, 1],
    )
    const translateY = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [100, 100, 20],
    )

    return (
        <motion.footer
            ref={ref}
            style={{opacity: opacity}}
            className={styles.footer}>
                <img src="/logowall.svg" alt="" />
                <div className={styles.tag}>Follow the fun</div>
                <div className={styles.smallprint}>
                    <div>Socials</div>
                    ©2024 McMilling Design Co.
                </div>
        </motion.footer>
    )

}