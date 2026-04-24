import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function About() {
    return (
        <>
            <Header />
            <div className="topBanner">
                <h1 className="bannerTitle">ABOUT FTC</h1>
                <h2 className="bannerSub">FIRST Tech Challengeについて</h2>
            </div>
            <div className="fullWidthContainer">
                <p className="JP"></p>
            </div>
            <Footer />
        </>
    );
}
