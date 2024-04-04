import styles from '../components/styles/globals.module.scss'
import { branding, design, editorial, ux } from '../layout'
import { Overview, Testimonial, Services } from './servicescomponents'

export default function About(props: any) {

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

            <Services
                branding={branding}
                design={design}
                editorial={editorial}
                ux={ux}
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