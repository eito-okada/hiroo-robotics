import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="./logo.png" alt="" />
            </div>
            <div className={styles.title}>
                <span className={styles.blueSpan}>HIROO</span> ROBOTICS
            </div>
            <div className={styles.navList}>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>ホーム</p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>FTCとは？</p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>チームについて</p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>お問い合せ</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
