import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TEAM_DATA from "../assets/teamData.json";
import "./About.css";

interface TeamMember {
    id: number;
    name: string;
    title: string;
    isLeader: boolean;
    bio: string; // This now holds variable-length text
    imageUrl: string; // Placeholder image URL
}

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const isLeaderClass = member.isLeader ? "card-leader" : "card-member";
    const cardLayoutClass = member.isLeader
        ? "card-leader-layout"
        : "card-member-layout";

    return (
        <div className={`team-card ${isLeaderClass} ${cardLayoutClass}`}>
            <div
                className={
                    member.isLeader
                        ? "card-content-leader"
                        : "card-content-member"
                }
            >
                {/* Profile Image */}
                <img
                    src={member.imageUrl}
                    alt={`Profile of ${member.name}`}
                    className={`profile-image ${
                        member.isLeader ? "image-leader" : "image-member"
                    }`}
                    onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                            "https://placehold.co/150x150/AAAAAA/FFFFFF?text=NA";
                    }}
                />

                <div>
                    <h3 className="name">{member.name}</h3>
                    <p className="title">{member.title}</p>
                </div>
            </div>
            <p className="bio">{member.bio}</p>
        </div>
    );
};

export default function About() {
    const leaders = TEAM_DATA.filter((member) => member.isLeader);
    const members = TEAM_DATA.filter((member) => !member.isLeader);
    return (
        <>
            <Header />
            <div className="topBanner">
                <h1 className="bannerTitle EN">ABOUT US</h1>
                <h2 className="bannerSub JP">チームについて</h2>
            </div>
            <div className="fullWidthContainer">
                <p className="JP">
                    我々<span className="EN">Hiroo Robotics</span>
                    は広尾学園高等学校を活動拠点とし、宇宙工学や機械工学など様々な
                    <span className="EN">STEM</span>
                    の分野に興味と情熱を持つ広尾学園の高校生が主体となり、チームを結成して活動しております。
                    <br />
                    <strong>
                        メンバーの全員が英語を堪能に使うことができ、
                    </strong>
                    多くのメンバーが国際的なバックグラウンドを持っています。
                    今年は初年度の活動で、日本の数少ない
                    <span className="EN">FTC</span>チームの一つにもなりました。
                    北米では大規模な大会が行われていますが、日本ではまだロボコンの中でもあまり注目されていない大会です。その中で私たちは、
                    <strong>大会優勝</strong>とともに
                    <span className="EN">FTC</span>の
                    <strong>認知度の拡大</strong>、
                    <strong>大会規模を大きくすること</strong>
                    も目標としています。
                    <br />
                    多様なバックグラウンドを持つメンバー、興味を突き詰めるためにできたチーム、そしてルーキーチームであるからこそ
                    <strong>勢いある挑戦</strong>が魅力のチームです。
                </p>
            </div>
            <div className="fullWidthContainer boardBack">
                <h3 className="heading EN">Our Mission</h3>
                <h3 className="subHeading JP">我々の目標</h3>
                <div className="contentGridContainer1Row">
                    <div className="smallYellowContent JP">
                        <p>
                            <span className="EN">FTC</span>
                            に出場し、優勝すること
                        </p>
                    </div>
                    <div className="smallYellowContent JP">
                        <p>
                            国内の他の高校生に向けた
                            <span className="EN">FTC</span>の知名度の上昇
                        </p>
                    </div>
                    <div className="smallYellowContent JP">
                        <p>
                            今季のルーキーチームとして
                            <br />
                            次の代へのノウハウの継承
                        </p>
                    </div>
                </div>
            </div>
            <div className="fullWidthContainer">
                <h3 className="heading JP">活動意義</h3>
                <p className="JP">
                    我々は毎シーズン独自のルールに基づき、ロボットのアイデア立案から
                    <span className="en">CAD</span>
                    設計、試作、組み立て、配線までを一貫して行います。
                    ロボット設計・制作により創作に不可欠であるトライアンドエラーを体験でき、世界レベルの競技に参加することでシーズンの間に困難に直面した際の対応力や創造性、自己肯定感といった人間的成長を促します。
                    メンバーだけでなく、地域社会への貢献も
                    <span className="en">STEM</span>
                    教育イベントやデモンストレーションを果たしつつ、活動を通して数少ない日本の
                    <span className="en">FTC</span>
                    チームとして今後の日本における
                    <span className="en">FTC</span>
                    プログラムの発展へと貢献していきます。
                </p>
            </div>

            <div className="fullWidthContainer gridBack">
                <h3 className="heading EN">What we do</h3>
                <h3 className="subHeading JP">活動内容</h3>

                <div className="mediumContent">
                    <div className="textContainer lightBack">
                        <h4 className="smallHeading JP">
                            1. ロボット設計・制作
                        </h4>
                        <p className="JP">
                            目的を満たすロボットのアイデアの立案からそれを実際に設計・制作します。
                            <span className="EN">Autodesk Fusion</span>を用い、
                            <span className="EN">CAD</span>
                            を制作し、既製品の部品と
                            <span className="EN">3D</span>
                            プリントした部品を組み合わせ、ロボットの型を作ります。そのほかにも動作するようにセンサーの取り付けや電子機器の配線なども行います。
                        </p>
                    </div>
                    <img
                        className="mediumContentImg"
                        src="./fusionScreenshot.png"
                        alt=""
                    />
                </div>
                <div className="mediumContent">
                    <div className="textContainer lightBack">
                        <h4 className="smallHeading JP">2. プログラミング</h4>
                        <p className="JP">
                            <span className="EN">Java</span>
                            を用いて、遠隔操作（テレオペ）と自律走行（オートノマス）双方に対応する制御ソフトを開発します。これらをロボットに搭載し、遠隔操作を可能とします。
                        </p>
                    </div>
                    <img
                        className="mediumContentImg"
                        src="./robotBuilding.webp"
                        alt=""
                    />
                </div>
                <div className="mediumContent">
                    <div className="textContainer lightBack">
                        <h4 className="smallHeading JP">
                            3. エンジニアリングノート
                        </h4>
                        <p className="JP">
                            何事にも再現性や透明性が重要です。
                            設計・開発・問題解決の過程や活動記録を詳細にまとめ、大会審査に提出します。
                        </p>
                    </div>
                    <img
                        className="mediumContentImg"
                        src="./robotBuilding.webp"
                        alt=""
                    />
                </div>
                <div className="mediumContent">
                    <div className="textContainer lightBack">
                        <h4 className="smallHeading JP">4. 広報・地域貢献</h4>
                        <p className="JP">
                            大会での成果だけでなく、
                            <span className="EN">STEM</span>
                            教育も重要視しています。学校や地域でのピッチ・デモを通じ、
                            <span className="EN">STEM</span>教育と
                            <span className="EN">FTC</span>
                            の魅力を発信して行きます。
                        </p>
                    </div>
                    <img
                        className="mediumContentImg"
                        src="./robotBuilding.webp"
                        alt=""
                    />
                </div>
                <div className="mediumContent">
                    <div className="textContainer lightBack">
                        <h4 className="smallHeading JP">
                            5. ゲーム分析・戦略立案
                        </h4>
                        <p className="JP">
                            ロボコンという性質上、競技の目的やルールが存在します。そこで勝てるようにそれらの分析・解析を行い、最適な戦術とロボット仕様を策定します。
                        </p>
                    </div>
                    <img
                        className="mediumContentImg"
                        src="./robotBuilding.webp"
                        alt=""
                    />
                </div>
            </div>
            <div className="fullWidthContainer members boardBack">
                <div className="textContainer"></div>
                <h3 className="heading EN">Team Members</h3>
                <h3 className="subHeading JP">チームメンバー</h3>
                <p className="JP">
                    <span className="EN">Hiroo Robotics</span>
                    はチーム内で<strong>ハード</strong>、<strong>ソフト</strong>
                    、<strong>財務</strong>
                    <strong className="EN">PR</strong>
                    の3個の分掌に別れています。
                </p>
                <section className="leader-section">
                    <div className="teamGrid">
                        {leaders.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                <section>
                    {/* Team Grid Layout: 4 columns for members on large screens */}
                    <div className="teamGrid core-team-grid">
                        {members.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
