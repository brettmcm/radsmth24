import styles from './styles/globals.module.scss'

export default function Label(props: any) {

    return (
        <section className={styles.label}>
            <div className={styles.overview}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            {/* <p className={styles.chapter}>— {props.chapter}</p> */}
        </section>
    )

}