import about from '../components/styles/about.module.scss'

import Image from 'next/image'

export function Portrait(props: any) {
    return (
        <div className={about.portrait}>
            <Image
                src={props.image}
                width={500}
                height={500}
                alt="Picture of member"
                className={about[`${props.imgclass}`]}
                />
        </div>
    )
}

export function Overview() {
    return (
        <section className={about.overview}>

            <p><b>Follow the fun</b></p>
            <p>is a graphic design studio specializing in brand strategy, visual identity, print and digital design. With over a decade of professional experience under our belts, we have honed our craft both at creative agencies and in-house at renowned brands.</p>

        </section>
    )
}

function Principle(props: any) {
    return (
        <div className={about.principle}>
            <Image
                width={100}
                height={100}
                src={props.image}
                alt="Picture of member"
                className={about.image}
                />
                <div className={about.copy}>
                    <h4>{props.headline}</h4>
                    <p>{props.desc}</p>
                </div>
        </div>
    )
}

export function Principles() {
    return (
        <section className={about.principles}>

            <Principle
                image='/canary/cover2.jpg'
                headline="Do less, better"
                desc="Description"
             />

            <div className={about.controls}>
                <div className={` ${about.arrow} ${about.left}`}></div>
                <div className={` ${about.arrow} ${about.right}`}></div>
            </div>

        </section>
    )
}

export function Testimonial(props: any) {

    return (
        <section className={`${about.testimonial} ${props.flipped ? about.flipped : ''}`}>
            <blockquote>
                <Image
                    src={props.logo}
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={about.quotelogo}
                    />
                <p>{props.quote}</p>
                <footer>
                    {props.author}
                    <cite>{props.cite}</cite>
                </footer>
            </blockquote>
            {/* <Image
                    src={props.image}
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={about.bgimage}
                    /> */}
        </section>
    )
}

export function Bios() {
    return (
        <section className={about.bios}>
            <div className={`${about.bio} ${about.right}`}>
                <Portrait image="/molly.jpg" imgclass="molly"></Portrait>
                <h3 className={about.molly}>Molly<br />McMillin</h3>
                <h4>Strategy</h4>
                <p>Pellentesque porttitor neque vitae interdum malesuada. Vivamus imperdiet sed lacus id aliquam. Vivamus in libero in tellus eleifend tincidunt at ac purus.</p>
            </div>
            <div className={`${about.bio} ${about.left}`}>
                <Portrait image="/brett.jpg" imgclass="brett"></Portrait>
                <h3 className={about.brett}>Brett<br />McMillin</h3>
                <h4>Creative</h4>
                <p>Pellentesque porttitor neque vitae interdum malesuada. Vivamus imperdiet sed lacus id aliquam. Vivamus in libero in tellus eleifend tincidunt at ac purus. Phasellus vestibulum, odio a venenatis aliquet, risus orci porttitor diam, at dictum purus leo a nunc.</p>
            </div>
        </section>
    )
}