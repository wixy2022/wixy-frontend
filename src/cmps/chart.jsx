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
        },
        title: {
            display: true,
            text: 'Contacts over time',
        },
    },
};

const getLastSixMonthsCurrExclusive = () => {
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const months = []
    const currMonth = new Date(Date.now()).getMonth() // june -> 5
    let idx = currMonth - 6 >= 0 ? currMonth - 6 : 12 + (currMonth - 6)

    for (let i = 0; i < 6; i++) {
        let currIdx = idx
        if (currIdx < 0) currIdx = allMonths.length + idx
        if (currIdx > 11) currIdx = idx - allMonths.length
        months.push(allMonths[currIdx])
        idx++
    }

    return months
}

const labels = getLastSixMonthsCurrExclusive()

export const data = {
    labels,
    datasets: [
        {
            label: 'Contacts',
            data: labels.map(() => utilService.getRandomIntInclusive(0, 1000)),
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
}

export function Chart() { // App /// delete comment
    return <Line options={options} data={data} />
}