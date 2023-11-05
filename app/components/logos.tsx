import Label from './label';
import styles from './styles/logos.module.scss'

import Image from 'next/image'

export default function Logos(props: any) {

const primaryBG = "#0a0b0d";
const secondaryBGA = "#87ffb9";
const secondaryBGB = "#F2F2F0";

const primaryImg ="/canary/canary-primary.svg";
const secondaryImgA ="/canary/canary-secondaryA.svg";
const secondaryImgB ="/canary/canary-secondaryB.svg";

    return (
        <div className={styles.col}>
            <Label
                chapter={props.chapter}
                title="Logo"
                desc={props.desc}
            />
            <section className={styles.logos}>
                <div className={`${styles.item} ${styles.primary}`} style={{ background: primaryBG }}>
                    <Image src={primaryImg}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        className={styles.itemImg} />
                </div>
                <div className={styles.secondary}>
                    <div className={`${styles.item} ${styles.secondaryB}`} style={{ background: secondaryBGB }}>
                        <Image src={secondaryImgB}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt=""
                            className={`${styles.itemImg} ${styles.itemImgIcon}`} />
                    </div>
                </div>
            </section>
        </div>
    )

}