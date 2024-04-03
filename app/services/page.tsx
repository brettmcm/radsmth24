import styles from '../components/styles/globals.module.scss'
import services from '../components/styles/services.module.scss'
import { branding, design, editorial, ux } from '../layout'

import Link from 'next/link'

import { motion } from "framer-motion"


export function Overview() {
    return (
        <section className={services.overview}>

            <div className={services.service}>
                <img src="services/branding.gif" />
                <p className={services.servicename}>Branding</p>
            </div>

            <div className={services.service}>
                <img src="services/editorial.gif" />
                <p className={services.servicename}>Print</p>
            </div>

            <div className={services.service}>
                <img src="services/digital.gif" />
                <p className={services.servicename}>Digital</p>
            </div>

        </section>
    )
}

export function Testimonial(props: any) {
    return (
        <section className={services.testimonial}>
            <blockquote>
                <img src={props.logo} className={services.quotelogo} />
                <p>{props.quote}</p>
                <footer>
                    {props.author}
                    <cite>{props.cite}</cite>
                </footer>
            </blockquote>
            <img src={props.image} className={services.bgimage} />
        </section>
    )
}


export function Services(props: any) {
    return (
        <section className={services.services}>
            <h2>Breakdown</h2>

        {props.branding === true &&
            <Link href="https://app.hellobonsai.com/f/c9e01f1baf4d2e6" className={services.category}>
                <h3>Branding</h3>
                <div className={services.indexline}></div>
                <ul>
                    <li>Strategy</li>
                    <li>Logo design</li>
                    <li>Style guide</li>
                    <li>Brand guide</li>
                    <li>Art direction</li>
                </ul>
            </Link>
        }
        {props.design === true &&
            <Link href="https://app.hellobonsai.com/f/c9e01f1baf4d2e6" className={services.category}>
                <h3>Graphic Design</h3>
                <div className={services.indexline}></div>
                <ul>
                    <li>Illustration</li>
                    <li>Lettering</li>
                    <li>Posters</li>
                    <li>Apparel</li>
                    <li>Packaging</li>
                    <li>Signage</li>
                </ul>
            </Link>
        }
        {props.editorial === true &&
            <Link href="https://app.hellobonsai.com/f/c9e01f1baf4d2e6" className={services.category}>
                <h3>Editorial Design</h3>
                <div className={services.indexline}></div>
                <ul>
                    <li>Brand books</li>
                    <li>Cover art</li>
                    <li>Layout</li>
                    <li>Typesetting</li>
                    <li>Print prep</li>
                    <li>Press check</li>
                </ul>
            </Link>
        }
        {props.ux === true &&
            <Link href="https://app.hellobonsai.com/f/c9e01f1baf4d2e6" className={services.category}>
                <h3>Interactive Design</h3>
                <div className={services.indexline}></div>
                <ul>
                    <li>Web design</li>
                    <li>Product design</li>
                </ul>
            </Link>
        }
        </section>
    )
}

export default function About(props: any) {

    return (
        <main className={styles.mainCol}>
            <Overview />
            <Testimonial
                name="Branding"
                list="Strategy, Logo Design, Visual Identity, Style Guide, Brand Guide, Art Direction"
                logo="../logos/canary.svg"
                image="../services/canary.jpg"
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
                logo="../logos/apeak.svg"
                image="../services/apeak.jpg"
                quote="Brett is an ideal designer to guide you on the path to a new style ... It's not quite Jesus and the single set of footsteps on the beach but it's darn close."
                author="Andrew"
                cite="Apeak Invest, Founder"
            />
        </main>
    )

}