import styles from '../components/styles/globals.module.scss'
import Image from 'next/image'

export function Disruptor(props: any) {
    return (
        <div className={styles.disrupt}>
            {props.body}
        </div>
    )
}

export function Overview(props: any) {
    return (
        <section className={styles.overview}>

            <div className={styles.overviewAbs}>
                <p>{props.head}</p>
                <p><b>{props.body}</b></p>
            </div>

        </section>
    )
}