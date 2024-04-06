import styles from '../components/styles/globals.module.scss'
import { branding, design, editorial, ux } from '../layout'
import { Overview, Testimonial, Services, Service } from './servicescomponents'

export default function About(props: any) {

    const brandingCaps = ["Strategy", "Logo design", "Style guide", "Brand guide", "Art direction"];
    const designCaps = ["Illustration", "Lettering", "Posters", "Apparel", "Packaging", "Signage"];
    const printCaps = ["Brand books", "Cover art", "Layout", "Typesetting", "Print prep", "Press check"];
 
    return (
        <main className={styles.mainCol}>
            <Overview />
            <Testimonial
                name="Branding"
                list="Strategy, Logo Design, Visual Identity, Style Guide, Brand Guide, Art Direction"
                logo="/logos/canary.svg"
                image="/services/canary.jpg"
                quote="Brett is an ideal designer to guide you on the path to a new style ... It's not quite Jesus and the single set of footsteps on the beach but it's darn close."
                author="Andrew"
                cite="Apeak Invest, Founder"
            />
            <Service
                name="Branding"
                gif="/services/branding.gif"
                alt="Spinning dot animation"
                capabilities={brandingCaps}
                formurl=""
                cta="Request branding work"
            />
            <Service
                name="Graphic Design"
                gif="/services/digital.gif"
                alt="Print animation"
                capabilities={designCaps}
                formurl=""
                cta="Request graphic design work"
            />
            <Service
                name="Print"
                gif="/services/editorial.gif"
                alt="Digital animation"
                capabilities={printCaps}
                formurl=""
                cta="Request print work"
            />
            <Testimonial
                name="Branding"
                list="Strategy, Logo Design, Visual Identity, Style Guide, Brand Guide, Art Direction"
                logo="/logos/apeak.svg"
                image="/services/apeak.jpg"
                quote="Brett is an ideal designer to guide you on the path to a new style ... It's not quite Jesus and the single set of footsteps on the beach but it's darn close."
                author="Andrew"
                cite="Apeak Invest, Founder"
            />
        </main>
    )

}