import styles from '../components/styles/globals.module.scss'
import about from '../components/styles/about.module.scss'
import Link from 'next/link';

export function Back() {
  return (
    <svg version="1.1" className={styles.backarrow} x="0px" y="0px" viewBox="0 0 182.7 146.5">
    <path d="M141.8,68.2H63.3c-1,0-1.5-1.3-0.8-1.9L90.8,40c0.5-0.4,0.5-1.1,0.1-1.6l-5.4-5.8c-0.4-0.5-1.1-0.5-1.6-0.1L41,72.4
	c-0.5,0.4-0.5,1.2,0,1.6l42.8,39.8c0.5,0.4,1.2,0.4,1.6-0.1l5.4-5.8c0.4-0.5,0.4-1.2-0.1-1.6L62.6,80.3c-0.7-0.7-0.3-1.9,0.8-1.9
	h78.5c0.6,0,1.1-0.5,1.1-1.1v-7.9C142.9,68.7,142.4,68.2,141.8,68.2z"/>
    </svg>
  )
}

export default function Services(props: any) {

    return (
        <main className={styles.mainCol}>
            <section className={about.main}>

                {/* <div className={about.rowContainer}>
                    <Link href="/"><Back /></Link>
                    <p className={about.title}>About</p>
                </div> */}
                <p><b>McMillin Design Co.</b> is a graphic design studio specializing in brand strategy, visual identity, print and digital design. With over a decade of professional experience under our belts, we have honed our craft both at creative agencies and in-house at renowned brands.</p>
                <p>Following the fun. Commited to the craft.</p>

            </section>
        </main>
    )

}