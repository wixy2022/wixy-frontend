import { useState } from "react"
import { Link } from "react-router-dom"

export const TempleteCard = ({ wap }) => {
    const [isMouseIn, setIsMouseIn] = useState(false)
    const defaultImg = "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.jpg/v1/fill/w_472%2Ch_266%2Cq_90%2Cusm_0.60_1.00_0.01/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.webp"
    const getTemplatePath = (id) => {
        return `/editor?id=${id}`
    }

    return <div onMouseEnter={(() => setIsMouseIn(true))} onMouseLeave={(() => setIsMouseIn(false))} className="template-card">

        <div className="template-header">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
        <div className={`template-card-img-container`}>
            {isMouseIn && <div className="card-hover-screen">
                <Link to={wap? getTemplatePath(wap._id) : '/editor'}><button className="edit">Edit</button></Link>
                <button className="view">View</button>
            </div>}
            <img src={wap?.imgUrl ? wap.imgUrl : defaultImg}
                alt="" className={`template-card-img ${isMouseIn ? 'smoke' : ''}`} />
        </div>
    </div>
}