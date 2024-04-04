import services from '../components/styles/services.module.scss'

import Link from 'next/link'
import Image from 'next/image'



export function Overview() {
    return (
        <section className={services.overview}>

            <div className={services.service}>
                {/* <img src="services/branding.gif" /> */}
                <Image
                    src="/services/branding.gif"
                    width={500}
                    height={500}
                    alt="Picture of member"
                    />
                <p className={services.servicename}>Branding</p>
            </div>

            <div className={services.service}>
                {/* <img src="services/editorial.gif" /> */}
                <Image
                    src="/services/editorial.gif"
                    width={500}
                    height={500}
                    alt="Picture of member"
                    />
                <p className={services.servicename}>Print</p>
            </div>

            <div className={services.service}>
                {/* <img src="services/digital.gif" /> */}
                <Image
                    src="/services/digital.gif"
                    width={500}
                    height={500}
                    alt="Picture of member"
                    />
                <p className={services.servicename}>Digital</p>
            </div>

        </section>
    )
}

export function Testimonial(props: any) {
    return (
        <section className={services.testimonial}>
            <blockquote>
                {/* <img src={props.logo} className={services.quotelogo} /> */}
                <Image
                    src={props.logo}
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={services.quotelogo}
                    />
                <p>{props.quote}</p>
                <footer>
                    {props.author}
                    <cite>{props.cite}</cite>
                </footer>
            </blockquote>
            {/* <img src={props.image} className={services.bgimage} /> */}
            <Image
                    src={props.image}
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={services.bgimage}
                    />
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