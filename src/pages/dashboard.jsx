import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { Chart } from '../cmps/chart'


export const Dashboard = () => {

    useEffect(() => {

        return () => {

        }
    }, [])

    const leads = [
        { name: 'Puki Ben David', phone: '050-5555555', email: 'puki@123.com' },
        { name: 'Shuki Cohen', phone: '050-7777777', email: 'Shuki@123.com' },
        { name: 'Puka Aharon', phone: '050-5575577', email: 'Puka@123.com' },
        { name: 'Puki Ben David', phone: '050-5555555', email: 'puki@123.com' },
        { name: 'Shuki Cohen', phone: '050-7777777', email: 'Shuki@123.com' },
        { name: 'Puka Aharon', phone: '050-5575577', email: 'Puka@123.com' },
        { name: 'Puki Ben David', phone: '050-5555555', email: 'puki@123.com' },
        { name: 'Shuki Cohen', phone: '050-7777777', email: 'Shuki@123.com' },
        { name: 'Puka Aharon', phone: '050-5575577', email: 'Puka@123.com' },
        { name: 'Puki Ben David', phone: '050-5555555', email: 'puki@123.com' },
        { name: 'Shuki Cohen', phone: '050-7777777', email: 'Shuki@123.com' },
        { name: 'Puka Aharon', phone: '050-5575577', email: 'Puka@123.com' }
    ]


    //TODO - CHANGE NAMES
    const wap = { name: 'Wap Name' }
    return <main className="dashboard">
        <h1>{wap.name} - Analytical data</h1>
        <section className="analytics-container">
            <div className="leads-info">
                <div className="info-boxes">
                    <div className="dash-info-box">
                        <h3>Site traffic</h3>
                        <span>55</span>
                    </div>
                    <div className="dash-info-box">
                        <h3>Contacts</h3>
                        <span>17</span>
                    </div>
                </div>
                <div className="chart">
                    <Chart />
                </div>
            </div>
            <div className="leads-list">
                {/* <h2>leads</h2> */}
                <ul>
                    <li>
                        <span className="title">Full Name</span>
                        <span className="title">Phone</span>
                        <span className="title">Email</span>
                    </li>
                    {leads.map((lead, idx) => {
                        return <li key={idx}>
                            <span>{lead.name}</span>
                            <span>{lead.phone}</span>
                            <span>{lead.email}</span>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    </main>
}