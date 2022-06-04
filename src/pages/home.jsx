import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import { TemplateCard } from '../cmps/template-card.jsx'
import { allTemplates, allWaps } from "../templates/templates";
import { utilService } from '../services/util.service'

export function Home() {

    const wap1 = { imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653689226/templates/page-template-02_aknlvb.png', description: 'Photography Studio' }
    const wap2 = { imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653688477/templates/page-template-01_awthi3.png', description: 'Restaurant' }
    const wap3 = { imgUrl: 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653774405/templates/page-template-03_yiq4qw.png', description: 'Construction Company' }

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
            {allWaps.map((wap, idx) => {
                if (idx === allWaps.length - 1) return <TemplateCard key={utilService.createKey()} secondRow={'second-row'} lastTemplate={'last-template'} wap={wap} />
                else if (idx > 2) return <TemplateCard key={utilService.createKey()} secondRow={'second-row'} wap={wap} />
                else return <TemplateCard key={utilService.createKey()} wap={wap} />
            })}
        </section>
        <Link to="/templates"><button className="show-more-btn">Show More</button></Link>
        <section className="about"></section>
        <AppFooter />

    </section>
}