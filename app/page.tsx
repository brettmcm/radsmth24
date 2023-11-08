import Overview from './components/overview'
import Logos from './components/logos'
import Colors from './components/colors'
import Gallery from './components/gallery'

import styles from './components/styles/globals.module.scss'

export default function Home() {


  var product = [
        {
          src: '/canary/bottle1.png',
          weight: 'even',
          fx: 'none'
        },
        {
          src: '/canary/jar.png',
          weight: 'heavy',
          fx: 'none'
        }
      ];
  var kids = [
        {
          src: '/canary/kids.jpg',
          weight: 'heavy',
          fx: 'none'
        },
        {
          src: '/canary/bottle2.jpg',
          weight: 'even',
          fx: 'none'
        }
      ];
    var tag = [
        {
          src: '/canary/purge.svg',
          weight: 'even',
          fx: 'difference'
        }
      ];
    var dead = [
        {
          src: '/canary/dead.svg',
          weight: 'even',
          fx: 'none'
        }
      ];
    

  return (
    <main className={styles.mainCol}>
      <Overview hero="/canary/skate.jpg"/>
      <Gallery images={tag} />
      <Logos
        chapter="01"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        />
      <Gallery images={product} />
      <Colors
        chapter="02"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu vehicula metus, a facilisis sapien. Maecenas pharetra, dui quis ullamcorper dignissim, odio lacus convallis lectus, quis facilisis augue lectus ut ipsum."
        />
      <Gallery images={kids} />
      <Gallery images={dead} />
    </main>
  )
}
