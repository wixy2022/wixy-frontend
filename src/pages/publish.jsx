import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { DynamicCmp } from "../cmps/dynamic-cmp"
import { storageService } from "../services/async-storage.service"
import { utilService } from "../services/util.service"
import { wapService } from "../services/wap.service"
import { socketService } from "../services/socket.service"
import { saveWap } from "../store/actions/wap.action"

export const Publish = ({ setPageClass, wapToLoad }) => {
    const [wap, setWap] = useState(null)
    const history = useHistory()

    useEffect(() => {
        setPageClass('publisher-open')
        const urlSrcPrm = new URLSearchParams(history.location.search)
        const wapId = urlSrcPrm.get('id')
        loadWap(wapId)

        socketService.emit('visit published wap', wapId)
        // socketService.on('visited was added', (wap) => dispatch(setWap(wap)))

        return () => {
            setPageClass('')
            // socketService.off('visited was added')
        }
    }, [])

    const loadWap = async (wapId) => {
        if (wapToLoad) return setWap(wapToLoad)
        try {
            const wap = await wapService.getById(wapId)
            setWap(wap)
            return
        } catch (err) {
            console.log('status', err.response.status)
            console.log('data', err.response.data)
        }
    }

    const onSubmitLead = async (lead) => {
        lead.wapId = wap._id
        console.log('lead', lead)
        const updatedWap = await wapService.addLeads(lead)
        socketService.emit('lead-added', updatedWap)
    }

    if (!wap) return <></>
    return <section onClick={ev => ev.stopPropagation()} className="publish">
        {wap.cmps.map(cmp => {
            return <DynamicCmp onClick={ev => ev.stopPropagation()} cmp={cmp} key={utilService.createKey()} isPublish={true} onSubmitLead={onSubmitLead} />

        })}
    </section>
}