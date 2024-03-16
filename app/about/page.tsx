import styles from '../components/styles/globals.module.scss'
import about from '../components/styles/about.module.scss'

export default function Services(props: any) {

    return (
        <main className={styles.mainCol}>
            <section className={about.main}>

                <p><b>McMillin Design Co.</b> is a graphic design studio specializing in brand strategy, visual identity, print and digital design. With over a decade of professional experience under our belts, we have honed our craft both at creative agencies and in-house at renowned brands.</p>
                <p>Following the fun. Commited to the craft.</p>

            </section>
        </main>
    )

}