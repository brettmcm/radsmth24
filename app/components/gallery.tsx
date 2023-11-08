import styles from './styles/globals.module.scss'
import Image from 'next/image'

export default function Gallery(props: any) {

    

    return (
        <div>
        <section className={styles.gallery}>
            {props.images.map((image: any, i: any) => (
                <div className={`${styles.container} ${styles[`${image.weight}`]}`} key={i}>
                    <img src={image.src} className={styles[`${image.fx}`]} />
                </div>
            ))}
        </section>
        </div>
    )

}