import Overview from '../../components/overview'
import Logos from '../../components/logos'
import Colors from '../../components/colors'
import Gallery from '../../components/gallery'

import styles from '../../components/styles/globals.module.scss'
import Header from '../../components/header'

export default function Brand() {


  var tag = [
      {
        type: 'float',
        src: '/canary/purge.svg',
        bg: 'none',
        weight: 'even',
        fx: 'difference'
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
        type: 'medium',
        src: '/canary/canary-primary.svg',
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
  var ticker = [
      {
        type: 'tight',
        src: '/canary/ticker.gif',
        bg: 'none',
        weight: 'even',
        fx: 'difference'
      }
    ];
  var product = [
      {
        type: 'full',
        src: '/canary/bottle1.png',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      },
      {
        type: 'full',
        src: '/canary/jar.png',
        bg: 'none',
        weight: 'heavy',
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
  var dead = [
      {
        type: 'small',
        src: '/canary/canary-secondaryB.svg',
        bg: 'none',
        weight: 'even',
        fx: 'none'
      }
    ];
    

  return (
    <main className={styles.mainCol}>
      <Overview hero="/canary/logo.jpg"/>
      <Gallery images={tag} />
      <Gallery images={logos} />
      <Gallery images={lifestyle} />
      {/* <Logos
        chapter="01"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        /> */}
      {/* <Colors
        chapter="02"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        /> */}
      <Gallery images={kids} />
      <Gallery images={dead} />
    </main>
  )
}
