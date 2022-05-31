import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import { TempleteCard } from '../cmps/template-card.jsx'

export function Home() {

    const wap1 = { _id: '6295b8d7d433c1503a30cb2c', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png' }
    const wap2 = { _id: '6295bd7bd433c1503a30cb30', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png' }
    const wap3 = { _id: '6295be16d433c1503a30cb32', imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png' }

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
            <TempleteCard wap={wap3}/>
        </section>
        <section className="about"></section>
        <AppFooter />

    </section>
}