import styles from '../components/styles/globals.module.scss'
import about from '../components/styles/about.module.scss'


export function Portrait(props: any) {
    return (
        <div className={about.portrait}>
            <img src={props.image} className={about[`${props.imgclass}`]}/>
        </div>
    )
}

export function Overview() {
    return (
        <section className={about.overview}>

            <p><b>McMillin Design Co.</b> is a graphic design studio specializing in brand strategy, visual identity, print and digital design. With over a decade of professional experience under our belts, we have honed our craft both at creative agencies and in-house at renowned brands.</p>
            <p>Following the fun. Commited to the craft.</p>

        </section>
    )
}

export function Bios() {
    return (
        <section className={about.bios}>
            <div className={`${about.bio} ${about.left}`}>
                <Portrait image="/brett.jpg" imgclass="brett"></Portrait>
                <h3>Brett McMillin</h3>
                <h4>Creative</h4>
                <p>Pellentesque porttitor neque vitae interdum malesuada. Vivamus imperdiet sed lacus id aliquam. Vivamus in libero in tellus eleifend tincidunt at ac purus. Phasellus vestibulum, odio a venenatis aliquet, risus orci porttitor diam, at dictum purus leo a nunc.</p>
            </div>
            <div className={`${about.bio} ${about.right}`}>
                <Portrait image="/molly.jpg" imgclass="molly"></Portrait>
                <h3>Molly McMillin</h3>
                <h4>Strategy</h4>
                <p>Pellentesque porttitor neque vitae interdum malesuada. Vivamus imperdiet sed lacus id aliquam. Vivamus in libero in tellus eleifend tincidunt at ac purus.</p>
            </div>
        </section>
    )
}

export default function About() {

    return (
        <main className={styles.mainCol}>
            <Overview />
            <Bios />
        </main>
    )

}