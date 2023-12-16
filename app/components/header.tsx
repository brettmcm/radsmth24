import styles from './styles/header.module.scss'

export default function Header(props: any) {

    return (
        <header className={styles.header}>
            <p className={styles.logo}>Radsmth</p>
        </header>
        
    )
}