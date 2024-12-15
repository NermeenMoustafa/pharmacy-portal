'use client'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts'

const BarChartComponent = ({ medications }) => {
    const Data = [
        { status: "Even", count: medications.filter(item => item.id % 2 === 0).length },
        { status: "Odd", count: medications.filter(item => item.id % 2 !== 0).length },
      ];

    return (
        <BarChart width={500} height={350} data={Data} margin={{right: 30}}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='status' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#2563eb' />
        </BarChart>
    )
}

export default BarChartComponent