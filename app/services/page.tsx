import { Overview, Disruptor } from '../components/globals'
import styles from '../components/styles/globals.module.scss'
import { Service, Services } from './servicescomponents'
import Gallery from '../components/gallery'

export default function About(props: any) {

    var servicehero = [
      {
        type: 'full',
        src: '/canary/cover2.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];

    const brandingCaps = ["Strategy", "Logo design", "Style guide", "Brand guide", "Art direction"];
    const designCaps = ["Illustration", "Lettering", "Posters", "Apparel", "Packaging", "Signage"];
    const printCaps = ["Brand books", "Cover art", "Layout", "Typesetting", "Print prep", "Press check"];
 
    return (
        <main className={styles.mainCol}>
            <Overview 
                head=""
                body="Elastic and durable, we scale to fit your needs"    
            />
            <Gallery images={servicehero} />
            <div className={ `${styles.row} ${styles.top}` }>
                <Service
                    name="Identity"
                    gif="/services/branding.gif"
                    alt="Spinning dot animation"
                    capabilities={brandingCaps}
                    desc="A scaleable engagement intended to get your brand from zero to one. Discovery, exploration, & delivery all in one effort."
                    formurl=""
                    cta="Request branding work"
                />
                <Service
                    name="Activation"
                    gif="/services/digital.gif"
                    alt="Print animation"
                    capabilities={designCaps}
                    desc="A scaleable engagement intended to get your brand from zero to one. Discovery, exploration, & delivery all in one effort."
                    formurl=""
                    cta="Request graphic design work"
                />
                <Service
                    name="Consultation"
                    gif="/services/editorial.gif"
                    alt="Digital animation"
                    capabilities={printCaps}
                    desc="A scaleable engagement intended to get your brand from zero to one. Discovery, exploration, & delivery all in one effort."
                    formurl=""
                    cta="Request print work"
                />
            </div>
        </main>
    )

}