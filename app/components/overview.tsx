import styles from './styles/overview.module.scss'

import Image from 'next/image'

export default function Overview(props: any) {

    return (
        <section className={styles.overview}>
            <Image src={props.hero}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                        className={styles.hero} />
            <div className={styles.details}>
                <h1>Canary, Co.</h1>
                <ul>
                    <li>
                        <h3>Client</h3>
                        <p>Canary, Co.</p>
                    </li>
                    <li>
                        <h3>Category</h3>
                        <p>Consumer Product</p>
                    </li>
                    <li>
                        <h3>Credit</h3>
                        <p>Brand Strategy, Visual Identity</p>
                    </li>
                    <li>
                        <h3>Location</h3>
                        <p>Oceanside, CA</p>
                    </li>
                    <li>
                        <h3>Year</h3>
                        <p>2022</p>
                    </li>
                </ul>
                <p className={styles.desc}>With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company&apos;s subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products.</p>
            </div>
        </section>
    )

}