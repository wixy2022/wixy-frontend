import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import { TempleteCard } from '../cmps/template-card.jsx'

export function Home() {

    const wap1 = { _id: '6295d704d433c1503a30cb35', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png', description: 'Photography Studio' }
    const wap2 = { _id: '6295d811d433c1503a30cb37', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png', description: 'Restaurant' }
    const wap3 = { _id: '6295d93ed433c1503a30cb39', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png', description: 'Construction Company' }

    return <section className="home-page">

        <section className="hero">
            <div className="get-started">
                <div> Create a website with</div>
                <div className="logo"><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653740284/logo-wixy_fafsy0.png" alt="" /></div>
                <Link to="/templates"><button className="get-started-btn">Get Started</button></Link>
            </div>
            <div className="hero-img"></div>

            <pre>
            </pre>
        </section>
        <section className="templates">
            <TempleteCard wap={wap1} />
            <TempleteCard wap={wap2} />
            <TempleteCard wap={wap3} />
            <TempleteCard secondRow={'second-row'} wap={wap1} />
            <TempleteCard secondRow={'second-row'} wap={wap2} />
            <TempleteCard secondRow={'second-row'} lastTemplate={'last-template'} wap={wap3} />
        </section>
        <Link to="/templates"><button className="show-more-btn">Show More</button></Link>
        <section className="about"></section>
        <AppFooter />

    </section>
}