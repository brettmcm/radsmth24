import styles from './styles/globals.module.scss'

export default function Disrupt(props: any) {

    return (
        <section className={styles.disruptor}
            style={{ backgroundImage: props.image }}
        >
        </section>
    )

}