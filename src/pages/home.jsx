import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import {TempleteCard} from '../cmps/template-card.jsx'
export function Home() {
    return <section className="home-page">
        
            <section className="hero">
                <div className="get-started">
                    <div> Create a website with</div>
                     <div className="logo"><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653680277/logo-wixy_o9vwtu.png" alt="" /></div>
                    <button className="get-started-btn">Get Started</button>
                </div>
                <div className="hero-img"></div>
                
                <pre>
                </pre>
            </section>
            <section className="templates">
                <TempleteCard/>
                <TempleteCard/>
                <TempleteCard/>
            </section>
            <section className="about"></section>
        <AppFooter />

    </section>
}