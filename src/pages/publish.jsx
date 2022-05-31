import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { DynamicCmp } from "../cmps/dynamic-cmp"
import { storageService } from "../services/async-storage.service"
import { utilService } from "../services/util.service"
import { wapService } from "../services/wap.service"
import { saveWap } from "../store/actions/wap.action"

export const Publish = ({ setPageClass ,pageClass}) => {
    const savedWap = useSelector(storeState => storeState.wapModule.wap)
    const [wap, setWap] = useState(null)
    const history = useHistory()



    useEffect(() => {
        if(!pageClass==='publisher-open') setPageClass('publisher-open')
        loadWap()
        return () => {
            setPageClass('')
        }
    }, [])

    const loadWap = async () => {
        const wapFromStorage = storageService.getWapFromStorage('wap')
        if (wapFromStorage) {
            return setWap(wapFromStorage)
        }

        if (savedWap) return setWap(savedWap)
        
        console.log(wap, savedWap)
        const urlSrcPrm = new URLSearchParams(history.location.search)
        const wapId = urlSrcPrm.get('id')

        if (wapId) {
            try {
                const wap = await wapService.getById(wapId)
                setWap(wap)
                return
            } catch (err) {
                console.log('status', err.response.status)
                console.log('data', err.response.data)
                /* FIX -  */
                // push to templates
                // this.props.setUserMsg({ type: 'danger', txt: 'Failed loading your page. Please try again later' })
            }
        }

        // setWap(wapService.getEmptyWap())
    }
    console.log(savedWap)
    if (!wap) return <></>
    return <section onClick={ev=>ev.stopPropagation()} className="publish">
        {wap.cmps.map(cmp => {
            return <DynamicCmp onClick={ev=>ev.stopPropagation()} cmp={cmp} key={utilService.createKey()} isPublish={true} />

        })}
    </section>
}