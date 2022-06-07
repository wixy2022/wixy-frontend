import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { utilService } from '../services/util.service';
// import faker from 'faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: true,
            text: 'Leads over time',
        },
    },
};

const getLastSixMonths = () => {
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const months = []
    const currMonth = new Date(Date.now()).getMonth() // june -> 5
    const year = new Date(Date.now()).getFullYear()
    let monthIdx = currMonth - 5

    for (let i = 0; i < 6; i++) {
        let currYear = year
        if (monthIdx < 0) {
            monthIdx = allMonths.length + monthIdx
            currYear -= 1
        }
        if (monthIdx > 11) {
            monthIdx = monthIdx - allMonths.length
        }
        months.push(`${allMonths[monthIdx]} ${currYear}`)
        monthIdx++
    }

    return months
}

const labels = getLastSixMonths()

export const data = {
    labels,
    datasets: [
        {
            // label: 'Leads',
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
}

export function Chart({ wapLeads }) {
    const leadsPerMonth = labels.map(label => {
        const leads = wapLeads?.filter(lead => {
            const createdAt = new Date(lead.createdAt)
            const month = utilService.getMonthName(createdAt.getMonth())
            const test = label.split(' ')[0]
            return month === label.split(' ')[0]
        })
        return leads.length
    })
    data.datasets[0].data = leadsPerMonth

    return <Line options={options} data={data} />
}