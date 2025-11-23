import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Home.css";

interface FadeInTextProps {
    children: React.ReactNode;
    delayMs: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({ children, delayMs }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    const style: React.CSSProperties = {
        transition: `opacity 1000ms cubic-bezier(0.25, 1, 0.5, 1), transform 1000ms cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${delayMs}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
    };
    return <div style={style}>{children}</div>;
};

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="topMain">
                    <FadeInText delayMs={0}>
                        <h3 className="teamMotto">STEM教育から、未来を創る</h3>
                    </FadeInText>

                    <FadeInText delayMs={300}>
                        <div className="teamStuff">
                            <h1 className="teamName">
                                <span className="blueSpan">HIROO</span> ROBOTICS
                            </h1>
                            <h3 className="teamNum">#32682</h3>
                        </div>
                    </FadeInText>
                </div>
                <div className="mainContent"></div>
            </main>
            <Footer />
        </>
    );
}
