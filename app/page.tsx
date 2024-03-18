import styles from './components/styles/globals.module.scss'
import home from './components/styles/intro.module.scss'
import Gallery from './components/gallery'



// import { motion } from "framer-motion"

export default function Home() {

    var suds = [
      {
        type: 'full',
        src: '/bloop/suds.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var posters = [
      {
        type: 'full',
        src: '/bloop/posters.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var bloopsplit = [
      {
        type: 'full',
        src: '/bloop/phone.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/bloop/hands.jpg',
        bg: '#0a0b0d',
        weight: 'heavy',
        fx: 'none'
      }
    ];
    var billboard = [
      {
        type: 'full',
        src: '/canary/logo.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var logos = [
      {
        type: 'full',
        src: '/canary/skate.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/canary/short-jar.jpg',
        bg: '#0a0b0d',
        weight: 'heavy',
        fx: 'none'
      }
    ];
    var lifestyle = [
      {
        type: 'full',
        src: '/canary/artcard.jpg',
        bg: 'none',
        weight: 'heavy',
        fx: 'none'
      },
      {
        type: 'small',
        src: '/canary/canary-secondaryB.svg',
        bg: '#F2F2F0',
        weight: 'even',
        fx: 'none'
      }
    ];
  var kids = [
      {
        type: 'full',
        src: '/canary/bottle2.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/canary/kids.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var dtstack = [
      {
        type: 'full',
        src: '/dtimes/dt-stack.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var dt3vip = [
      {
        type: 'full',
        src: '/dtimes/sendit.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/dtimes/dt4-destruct.jpg',
        bg: 'none',
        weight: 'heavy',
        fx: 'none'
      }
    ];
    var dtlayout1 = [
      {
        type: 'full',
        src: '/dtimes/dt5-snake.jpg',
        bg: 'none',
        weight: 'heavy',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/dtimes/united-in-dirt.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var dtlayout2 = [
      {
        type: 'full',
        src: '/dtimes/dt5-stack.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    var wheels = [
      {
        type: 'full',
        src: '/dtimes/wheels-that-move.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];

  return (
    <main className={styles.mainCol}>
      <section className={home.intro}>
        <div className={home.content}>
          <svg version="1.1" className={home.heromark} x="0px" y="0px" viewBox="0 0 221 193.2">
              <path d="M34,193.2H1c-0.6,0-1-0.4-1-1V48.6c0-0.2,0.1-0.4,0.2-0.6l34-47.6C34.4,0.2,34.7,0,35,0h33c0.6,0,1,0.4,1,1v143.6
                c0,0.2-0.1,0.4-0.2,0.6l-34,47.6C34.6,193,34.3,193.2,34,193.2z M110.8,192.8l34-47.6c0.1-0.2,0.2-0.4,0.2-0.6v-48V1
                c0-0.6-0.4-1-1-1h-33c-0.3,0-0.6,0.2-0.8,0.4L76.1,48C76,48.2,76,48.4,76,48.6v143.6c0,0.6,0.4,1,1,1h33
                C110.3,193.2,110.6,193,110.8,192.8z M186.7,192.8l34-47.6c0.1-0.2,0.2-0.4,0.2-0.6V1c0-0.6-0.4-1-1-1h-33c-0.3,0-0.6,0.2-0.8,0.4
                l-34,47.6c-0.1,0.2-0.2,0.4-0.2,0.6v143.6c0,0.6,0.4,1,1,1h33C186.3,193.2,186.6,193,186.7,192.8z"/>
            </svg>
          <h1><b>McMillin Design Co.</b> is a graphic design studio specializing in brand strategy, visual identity, editorial and digital design.</h1>
        </div>
      </section>
      <Gallery images={logos} />
      <Gallery images={billboard} />
      <Gallery images={lifestyle} />
      <Gallery images={kids} />
      <Gallery images={suds} />
      <Gallery images={bloopsplit} />
      <Gallery images={posters} />
      <Gallery images={dtstack} />
      <Gallery images={dtlayout1} />
      <Gallery images={dtlayout2} />
      <Gallery images={dt3vip} />
      <Gallery images={wheels} />

    </main>
  )
}
