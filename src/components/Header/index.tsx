import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="curriculum" />
                <nav>
                    <a className={styles.active} href="#Home">Home</a>
                    <a href="#Experience">Experience</a>
                </nav>
            </div>
        </header>
    )
}