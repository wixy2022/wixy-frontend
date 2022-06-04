import { useEffect, useState } from "react"
import { Publish } from "../pages/publish"


export const PreviewModal =({setPageClass,wapToLoad})=>{
const [screenMode,setScreenMode] = useState()

useEffect(()=>{
  console.log(window.innerWidth)
  if(window.innerWidth>1200)setScreenMode('computer-screen')
},[])
  return <>
           {(screenMode==='phone-screen')&&<div className="phone-background"></div>}
   <div onClick={ev=>ev.stopPropagation()} className="preview-size-options">
                <div onClick={()=>setScreenMode('phone-screen')} className={ ` phone-screen ${screenMode==='phone-screen'? 'active-mode':''}`}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654032741/smartphone-small_vdsvdw.png" alt="" /></div>
                <div onClick={()=>setScreenMode('tablet-screen')} className={ ` tablet-screen ${screenMode==='tablet-screen'? 'active-mode':''}`}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654032752/tablet-small_zykmgu.png" alt="" /></div>
                <div onClick={()=>setScreenMode('computer-screen')} className={ ` computer-screen ${screenMode==='computer-screen'? 'active-mode':''}`}><img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654037171/imac_2_nbyvlc.png" alt="" /></div>
            </div>
  <section className={`editor-preview ${screenMode}`}>
            <Publish  wapToLoad={wapToLoad} setPageClass={setPageClass} />
        </section >
  </> 
}