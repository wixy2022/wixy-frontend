import { TemplateCard } from "../cmps/template-card"
import { utilService } from "../services/util.service"
import { allWaps } from '../templates/templates'



export const Templates = () => {
    return <section className="templates-page">
        <main>
            <h1 className="templates-title">Pick a Template You Love</h1>
            <div className="templates-preview">
                {allWaps.map(wap => <TemplateCard key={utilService.createKey()} wap={wap} />)}
            </div>
        </main>
    </section>
}