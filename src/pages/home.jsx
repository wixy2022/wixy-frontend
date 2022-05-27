import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import {TempleteCard} from '../cmps/template-card.jsx'
export function Home() {
    return <section className="home-page">
        
            <section className="hero">
                <h1 style={{fontSize: '40px', marginBlockStart:'100px'}}>SSSS</h1>
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