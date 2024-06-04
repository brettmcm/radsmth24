import { Overview, Disruptor } from '../components/globals'
import styles from '../components/styles/globals.module.scss'
import { Testimonial, Bios } from './aboutcomponents'
import Gallery from '../components/gallery'

export default function About() {

    var abouthero = [
      {
        type: 'full',
        src: '/disruptors/neonmoon.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];

    return (
        <main className={styles.mainCol}>
            <Overview 
                head=""
                body="You yourself are neither property nor diction"    
            />
            <Gallery images={abouthero} />
            <Disruptor
                body="Crafting unique and impactful brand identities that resonate with your audience."
            />
            <Testimonial
                logo="/canary/icon.png"
                image="/services/canary.jpg"
                quote="Brett is an ideal designer to guide you on the path to a new style ... It's not quite Jesus and the single set of footsteps on the beach but it's darn close."
                author="Luke"
                cite="Founder, Canary"
                flipped={false}
            />
            <Bios />
        </main>
    )

}