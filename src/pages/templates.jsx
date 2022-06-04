import { useState } from "react"
import { TemplateCard } from "../cmps/template-card"
import { utilService } from "../services/util.service"
import { allWaps } from '../templates/templates'



export const Templates = () => {

    const [wapTemplates, setWapTemplates] = useState(allWaps)


    return <section className="templates-page">
        <h1 className="templates-title">
            Pick the Website Template You Love
        </h1>
        <div className="templates-preview">
            {allWaps.map(wap => <TemplateCard key={utilService.createKey()} wap={wap} />)}
        </div>
    </section>
}