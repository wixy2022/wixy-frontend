import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import { TempleteCard } from '../cmps/template-card.jsx'

export function Home() {

    const wap1 = { _id: '629120385a660f6cae594bb5', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png' }
    const wap2 = { _id: '62911fb25a660f6cae594bb4', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png' }

    return <section className="home-page">

        <section className="hero">
            <div className="get-started">
                <div> Create a website with </div>
                <div className="logo"><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653680277/logo-wixy_o9vwtu.png" alt="" /></div>
                <Link to="/templates"><button className="get-started-btn">Get Started</button></Link>
            </div>
            <div className="hero-img"></div>

            <pre>
            </pre>
        </section>
        <section className="templates">
            <TempleteCard wap={wap1} />
            <TempleteCard wap={wap2} />
            <TempleteCard />
        </section>
        <section className="about"></section>
        <AppFooter />

    </section>
}