import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { storageService } from "../services/async-storage.service"
import { wapService } from "../services/wap.service"
import { setWap } from "../store/actions/wap.action"
import { PreviewModal } from "./preview-modal"

export const TemplateCard = ({ isMySites,wap }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isMouseIn, setIsMouseIn] = useState(false)
    const defaultImg = "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.jpg/v1/fill/w_472%2Ch_266%2Cq_90%2Cusm_0.60_1.00_0.01/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.webp"
    const [isPreview, setIsPreview] = useState(false)

    const getTemplatePath = async () => {
        let cloneWap
        if (wap.name === 'new-template') {
            cloneWap = wapService.getEmptyWap()
        } else {
            cloneWap = JSON.parse(JSON.stringify(wap))
            cloneWap.cmps.forEach(cmp => wapService.createAncestors(cmp))

        }

        const savedWap = await wapService.save(cloneWap)
        storageService.saveWapToStorage(savedWap)
        dispatch(setWap(savedWap))
        history.push(`/editor?id=${savedWap._id}`)
    }

    return <div onMouseEnter={(() => setIsMouseIn(true))} onMouseLeave={(() => setIsMouseIn(false))} className="template-card">

        <div className="template-header">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
        <div className="template-card-img-container">
            {isMouseIn && <div className="card-hover-screen">
                <button className="edit" onClick={getTemplatePath}>Edit</button>
               {!isMySites&& <button onClick={() => setIsPreview(true)} className="view">View</button>}
                {/* {TODO - ONLY IF IS MY-SITES PAGE} */}
                {isMySites&&<Link to={`/dashboard?id=${wap._id}`} className="analytics">Analytics</Link>}
            </div>}
            <img src={wap?.imgUrl ? wap.imgUrl : defaultImg}
                alt="" className={`template-card-img ${isMouseIn ? 'smoke' : ''}`} />
        </div>
        <h4 className="wap-description">{wap?.description}</h4>

        {isPreview && <>
            <PreviewModal wapToLoad={wap} setPageClass={() => { console.log('hey') }} setIsPreview={setIsPreview} />
            <div onClick={(ev) => { ev.stopPropagation(); setIsPreview(false) }} className="black-screen"></div>
        </>
        }
    </div>
}