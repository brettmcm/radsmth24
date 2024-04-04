import styles from '../components/styles/globals.module.scss'
import { Overview, Bios } from './aboutcomponents'

export default function About() {

    return (
        <main className={styles.mainCol}>
            <Overview />
            <Bios />
        </main>
    )

}