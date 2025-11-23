import { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface AnimationTextProps {
    children: React.ReactNode;
    delayMs: number;
}

const UnderlineText: React.FC<AnimationTextProps> = ({ children, delayMs }) => {
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOrigin, setUnderlineOrigin] = useState("left");

    useEffect(() => {
        const startGrowthTimer = setTimeout(() => {
            setUnderlineOrigin("left");
            setUnderlineWidth(1);
        }, 100 + delayMs);

        const startShrinkTimer = setTimeout(() => {
            setUnderlineOrigin("right");
            setUnderlineWidth(0);
        }, 800 + delayMs);

        return () => {
            clearTimeout(startGrowthTimer);
            clearTimeout(startShrinkTimer);
        };
    }, [delayMs]);

    const textContainerStyle: React.CSSProperties = {
        position: "relative",
        display: "inline-block",
        height: "min-content",
    };

    const underlineStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "0px",
        left: "12px",
        width: "95%",
        height: "2px",
        backgroundColor: "#3E4679",
        transform: `scaleX(${underlineWidth})`,
        transformOrigin: underlineOrigin,
        transition: `transform 500ms ease-in-out`,
    };

    return (
        <div style={textContainerStyle}>
            {children}
            <div style={underlineStyle} />
        </div>
    );
};

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="./" className={styles.logoTitleHolder}>
                <div className={styles.logo}>
                    <img src="./logo.png" alt="" />
                </div>
                <UnderlineText delayMs={0}>
                    <div className={styles.title}>
                        <span className={styles.blueSpan}>HIROO</span> ROBOTICS
                    </div>
                </UnderlineText>
            </a>
            <div className={styles.navList}>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>ホーム</p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>
                            <span className={styles.spanEN}>FTC</span>とは
                        </p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./about-us">
                        <p>チームについて</p>
                    </a>
                </div>
                <div className={styles.navItem}>
                    <a href="./">
                        <p>お知らせ</p>
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
