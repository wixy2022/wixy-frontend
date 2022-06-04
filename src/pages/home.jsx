import { Link } from "react-router-dom"
import { AppFooter } from "../cmps/app-footer";
import { TemplateCard } from '../cmps/template-card.jsx'
import { allWaps } from "../templates/templates";
import { utilService } from '../services/util.service'

export function Home() {


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
                if (idx > 2) return
                // if (idx === allWaps.length - 1) return <TemplateCard key={utilService.createKey()} secondRow={'second-row'} lastTemplate={'last-template'} wap={wap} />
                // else if (idx > 2) return <TemplateCard key={utilService.createKey()} secondRow={'second-row'} wap={wap} />
                return <TemplateCard key={utilService.createKey()} wap={wap} />
            })}
        </section>
        <section className="show-more">
            <div className="line"></div>
            <Link to="/templates"><button className="show-more-btn">Show More</button></Link>
            <div className="line"></div>
        </section>
        <section className="freedom">
            <pre className="left-pre">
                The Freedom to Create
                the Websites You Want
            </pre>
            <div className="right-pre">

                <pre>
                    Design and build your own high-quality websites.
                    Whether you’re promoting your business, showcasing
                    your work, opening your store or starting a blog—you
                    can do it all with the Wix website builder.
                </pre>
                <div className="link-to-templates">

                    <Link to='/templates' className="get-started"> Get Started
                    </Link>
                    <span className=".slide-right">→</span>
                </div>
            </div>
        </section>
        <section className="build-unique">
            <div className="presence">
                <h2>
                    Build Your Unique Online Presence
                </h2>
                <p>To create your own website, follow these steps:
                </p>
                <div className="lines">
                    <div className="line-black"></div>
                    <div className="line-black"></div>
                </div>
                <div className="features">
                    <article className="arti-1">
                        <h3>
                            Customize your site
                        </h3>
                        <p>
                            Pick a template and customize anything, or answer a few questions and get a free website designed just for you.
                        </p>
                    </article>
                    <article className="arti-2">
                        <h3>
                            Edit your mobile view

                        </h3>
                        <p>
                            Check out the mobile-optimized version of your site. Switch to the Mobile Editor to personalize it even more.
                        </p>
                    </article>
                </div>
            </div>
            <div className="developer-img">
                <img src="https://img.freepik.com/free-vector/microsite-development-abstract-concept-vector-illustration-microsite-web-development-small-internet-site-graphic-design-service-landing-page-software-programming-team-abstract-metaphor_335657-2296.jpg?t=st=1654375418~exp=1654376018~hmac=6db126f7e504a2e81fc10998bb5aeed1095ba25301bc6f87cc9162fdda824520&w=826" alt="" />
            </div>
        </section>
       
        <AppFooter />

    </section>
}