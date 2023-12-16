import Link from 'next/link'
import styles from './components/styles/globals.module.scss'
import home from './components/styles/intro.module.scss'

export default function Home() {

  var bgImage = '/canary/cover.jpg'
  var bgImage2 = '/canary/bottle2.jpg'

  return (
    <main className={styles.mainCol}>
      <video className={home.videoBG} autoPlay playsInline loop>
        <source src="static.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className={home.intro}>
        <h1>Radsmth is a graphic design studio specializing in brand strategy, visual identity, print and digital design.</h1>
      </section>
      {/* <section className={home.caseStudy}>
        <Link href="/brands/canary"><div className={home.csBody} style={{ backgroundImage: `url(${bgImage})`}}></div></Link>
      </section>
      <section className={home.caseStudy}>
        <div className={home.csBody} style={{ backgroundImage: `url(${bgImage2})`}}></div>
      </section> */}
    </main>
  )
}
