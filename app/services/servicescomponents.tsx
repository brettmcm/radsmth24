import services from '../components/styles/services.module.scss'

import Link from 'next/link'
import Image from 'next/image'



export function Service(props: any) {
    return (
        <section className={services.service}>
            <Image
                src={props.gif}
                width={500}
                height={500}
                alt={props.alt}
                />
            <p className={services.servicename}>{props.name}</p>
            <p>{props.desc}</p>
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