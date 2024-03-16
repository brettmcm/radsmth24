'use client'

import {useState} from 'react';
import styles from '../components/styles/listing.module.scss'

import Link from "next/link"
import Image from 'next/image'

export default function Services(props: any) {


    const [dynamicBG, setDBG] = useState("");

    const handleHover = (event: React.ChangeEvent<any>) => {
        const brand = event.currentTarget.getAttribute("data-brand");
        setDBG(brand);
    };
    const handleLeave = (event: React.ChangeEvent<any>) => {
        setDBG("");
    };

    return (
        <section className={`${styles.centerStage} ${styles[`${dynamicBG}`]}`}>
            <ul className={styles.listing}>
                <Link href="/brand/canary" data-brand="bloop" onMouseOver={handleHover} onMouseOut={handleLeave}><li>
                    <h2>Bloop</h2>
                    <hr />
                    <h3>Home Products</h3>
                </li></Link>
                <Link href="/brand/canary" data-brand="canary" onMouseOver={handleHover} onMouseOut={handleLeave}><li>
                    <h2>Canary</h2>
                    <hr />
                    <h3>Human Care Products</h3>
                </li></Link>
                <Link href="/brand/canary" data-brand="islanddwell" onMouseOver={handleHover} onMouseOut={handleLeave}><li>
                    <h2>Island Dwell</h2>
                    <hr />
                    <h3>Interior Design</h3>
                </li></Link>
                <Link href="/brand/canary" data-brand="apeak" onMouseOver={handleHover} onMouseOut={handleLeave}><li>
                    <h2>Apeak Invest</h2>
                    <hr />
                    <h3>Commercial Real Estate</h3>
                </li></Link>
            </ul>
        </section>
    )

}