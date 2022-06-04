import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { wapService } from "../services/wap.service"
import { saveWap } from "../store/actions/wap.action"

export const TemplateCard = ({ wap, secondRow, lastTemplate }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isMouseIn, setIsMouseIn] = useState(false)
    const defaultImg = "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.jpg/v1/fill/w_472%2Ch_266%2Cq_90%2Cusm_0.60_1.00_0.01/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.webp"

    const getTemplatePath = async () => {
        // const wapJoneyDep = wapService.createAncestors(wap)
        const cloneWap = JSON.parse(JSON.stringify(wap))
        cloneWap.cmps.forEach(cmp => wapService.createAncestors(cmp))

        const savedWap = await wapService.save(cloneWap)
        // dispatch(saveWap(newWap))
        history.push(`/editor?id=${savedWap._id}`)
        // return `/editor?id=${newWap._id}`
    }

    if (!secondRow) secondRow = ''
    if (!lastTemplate) lastTemplate = ''

    return <div onMouseEnter={(() => setIsMouseIn(true))} onMouseLeave={(() => setIsMouseIn(false))} className="template-card">

        <div className="template-header">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
        <div className={`template-card-img-container`}>
            {isMouseIn && <div className="card-hover-screen">
                <button className="edit" onClick={getTemplatePath}>Edit</button>
                <button className="view">View</button>
            </div>}
            <img src={wap?.imgUrl ? wap.imgUrl : defaultImg}
                alt="" className={`template-card-img ${isMouseIn ? 'smoke' : ''} ${secondRow} ${lastTemplate}`} />
            {!secondRow && <h4 className="wap-description">{wap?.description}</h4>}
        </div>
    </div>
}