import { useState } from "react"



export const TempleteCard = (wap) => {
    const [isMouseIn, setIsMouseIn] = useState(false)

    return <div onMouseEnter={(() => setIsMouseIn(true))} onMouseLeave={(() => setIsMouseIn(false))} className="template-card">

        <div className="template-header">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
        <div className={`template-card-img-container`}>
            {isMouseIn && <div className="card-hover-screen">
                <button className="edit">Edit</button>
                <button className="view">View</button>
            </div>}
            <img src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.jpg/v1/fill/w_472%2Ch_266%2Cq_90%2Cusm_0.60_1.00_0.01/36fc2659a252c8be3f9a98f30373c2ba911981c742e617551b1eccd529eaf3c11626607773139.webp"
                alt="" className={`template-card-img ${isMouseIn ? 'smoke' : ''}`} />
        </div>
    </div>
}