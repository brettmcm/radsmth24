import styles from '../components/styles/globals.module.scss'
import about from '../components/styles/about.module.scss'

export default function Services(props: any) {

    return (
        <main className={styles.mainCol}>
            <section className={about.overview}>

                <p><b>McMillin Design Co.</b> is a graphic design studio specializing in brand strategy, visual identity, print and digital design. With over a decade of professional experience under our belts, we have honed our craft both at creative agencies and in-house at renowned brands.</p>
                <p>Following the fun. Commited to the craft.</p>

            </section>

            <section className={about.services}>
                <h2>Services</h2>

                <div className={about.category}>
                    <h3>Branding</h3>
                    <div className={about.indexline}></div>
                    <ul>
                        <li>Strategy</li>
                        <li>Logo design</li>
                        <li>Style guide</li>
                        <li>Brand guide</li>
                        <li>Art direction</li>
                    </ul>
                </div>

                <div className={about.category}>
                    <h3>Graphic Design</h3>
                    <div className={about.indexline}></div>
                    <ul>
                        <li>Posters</li>
                        <li>Apparel</li>
                        <li>Packaging</li>
                        <li>Signage</li>
                        <li>Stickers</li>
                        <li>Illustration</li>
                        <li>Lettering</li>
                    </ul>
                </div>

                <div className={about.category}>
                    <h3>Editorial Design</h3>
                    <div className={about.indexline}></div>
                    <ul>
                        <li>Brand books</li>
                        <li>Cover design</li>
                        <li>Layout</li>
                        <li>Typesetting</li>
                        <li>Print prep</li>
                        <li>Press check</li>
                    </ul>
                </div>

                <div className={about.category}>
                    <h3>Interactive Design</h3>
                    <div className={about.indexline}></div>
                    <ul>
                        <li>Web design</li>
                        <li>Product design</li>
                    </ul>
                </div>
            </section>
        </main>
    )

}