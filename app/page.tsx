import styles from './components/styles/globals.module.scss'
import home from './components/styles/intro.module.scss'
import Gallery from './components/gallery'
import { Logo } from './logo';

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
        src: '/dtimes/dt3-board.jpg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/dtimes/dt3-seal.jpg',
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

  return (
    <main className={styles.mainCol}>
      <section className={home.intro}>
        <div className={home.content}>
          <h1>MCM</h1>
          <Logo />
          <h1>Design CO.</h1>
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

    </main>
  )
}
