import styles from './styles/gallery.module.scss'
import Image from 'next/image'

export default function Gallery(props: any) {

    

    return (
        <div>
        <section className={styles.gallery}>
            {props.images.map((image: any, i: any) => (
                <div className={`${styles.container} ${styles[`${image.weight}`]} ${styles[`${image.type}`]}`}
                     style={{ background: `${image.bg}`}}
                     key={i}>
                    {/* <img src={image.src} className={styles[`${image.fx}`]} /> */}
                    <Image
                    src={image.src}
                    width={500}
                    height={500}
                    alt="Picture of member"
                    className={styles[`${image.fx}`]}
                    />
                </div>
            ))}
        </section>
        </div>
    )

}