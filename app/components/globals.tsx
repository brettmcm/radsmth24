'use client'

import styles from '../components/styles/globals.module.scss'
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export function Disruptor(props: any) {
    return (
        <div className={styles.disrupt}>
            {props.body}
        </div>
    )
}

export function Overview(props: any) {


    const ref = useRef(null);
    const { scrollY } = useScroll();
    const scrollPositionFromTop = useMotionValue(0); // Initialized as a motionValue

    useEffect(() => {
        const calculateScrollPosition = () => {
            const positionFromTop = scrollY.get();
            scrollPositionFromTop.set(positionFromTop); // Update the motionValue directly
        };

        calculateScrollPosition();
        const unsubscribe = scrollY.onChange(calculateScrollPosition);

        return () => {
            unsubscribe();
        };


    }, [scrollPositionFromTop, scrollY]);

    
    
    const opacity = useTransform(
        scrollPositionFromTop,
        [1, 500],
        [1, 0]
    );

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 1 }}
            style={{opacity}}
            className={styles.overview}>

            <div className={styles.overviewAbs}>
                <p>{props.head}</p>
                <p><b>{props.body}</b></p>
            </div>

        </motion.section>
    )
}