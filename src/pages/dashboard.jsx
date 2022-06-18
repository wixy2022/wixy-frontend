import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { wapService } from "../services/wap.service"
import { socketService } from "../services/socket.service"
import { utilService } from "../services/util.service"
import { setMsg } from "../store/actions/msg.action"

import { Loader } from '../cmps/app-loader'
import { Chart } from '../cmps/chart'

import {testData} from '../templates/templates'

export const Dashboard = () => {
    const [wap, setWap] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        loadWap()
        socketService.on('visited was added', (wap) => dispatch(setWap(wap)))
        socketService.on('lead was added', (wap) => {
            dispatch(setMsg({ type: 'success', txt: 'You have a new lead' }))
            dispatch(setWap(wap))
        })

        return () => {
            socketService.off('visited was added')
            socketService.off('lead was added')
        }

    }, [])

    const loadWap = async () => {
        const urlSrcPrm = new URLSearchParams(history.location.search)
        const wapId = urlSrcPrm.get('id')
        if (wapId) {
            try {
                const wap = await wapService.getById(wapId)
                if(wap) setWap(wap)
                // dispatch(setWap(wap))
                return
            } catch (err) {
                console.log('status', err.response.status)
                console.log('data', err.response.data)
                dispatch(setMsg({ type: 'danger', txt: 'failed to load wap' }))
                // setWap(testData)
            }
        } else {
            if (wap) return
            // dispatch(setMsg({ type: 'danger', txt: '' }))
            history.push('/')
        }
    }

    if (!wap) return <Loader />
    
    const leadsCount = wap.leads?.length || 'No contacts yet'
    const traffic = wap.visitors || 'No visitors yet'
    return <main className="dashboard">
        <h1>Website Analytics</h1>
        <section className="analytics-container">
            <div className="leads-info">
                <div className="info-boxes">
                    <div className="dash-info-box">
                        <h3>Site traffic</h3>
                        <span>{traffic}</span>
                    </div>
                    <div className="dash-info-box">
                        <h3>Contacts</h3>
                        <span>{leadsCount}</span>
                    </div>
                </div>
                <div className="chart">
                    <Chart wapLeads={wap.leads} />
                </div>
            </div>
            <div className="leads-list">
                {/* <h2>leads</h2> */}
                <ul>
                    <li>
                        <span className="title">Full Name</span>
                        <span className="title">Phone</span>
                        <span className="title">Email</span>
                        <span className="title">Date</span>
                    </li>
                    {wap.leads?.map((lead, idx) => {
                        const createdAt = new Date(lead.createdAt)
                        const month = utilService.getMonthName(createdAt.getMonth())
                        const year = createdAt.getFullYear()

                        return <li key={idx}>
                            <span>{lead.fullName}</span>
                            <span>{lead.phoneNumber}</span>
                            <span>{lead.email}</span>
                            <span>{month}, {year}</span>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    </main>
}