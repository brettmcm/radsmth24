import styles from './styles/globals.module.scss'
import Image from 'next/image'

export default function Gallery(props: any) {

    

    return (
        <section className={styles.gallery}>
            {props.images.map((image: any) => (
                <div className={`${styles.container} ${styles[`${image.weight}`]}`}>
                    <img src={image.src} className={styles[`${image.fx}`]} />
                </div>
            ))}
        </section>
    )

}