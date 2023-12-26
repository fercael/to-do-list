import styles from './Header.module.css'

function Header() {
    const dateTime = new Date
    return(
        <header className={styles['header-header']}>
            <h1 className={styles['header-h1']}>{`${dateTime.getDay()}-${dateTime.getMonth()}-${dateTime.getFullYear()}`}</h1>
        </header>
    )
}

export { Header }