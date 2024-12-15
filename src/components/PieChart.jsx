'use client'

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const PieChartComponent = ({ medications }) => {
    const inventoryData = [
        {name: "Medication A", inventory: 10},
        {name: "Medication B", inventory: 15},
        {name: "Medication C", inventory: 5},
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <PieChart width={500} height={400}>
            <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                innerRadius={50}
                fill="#8884d8"
                dataKey="inventory"
                nameKey="name"
                label
            >
            {inventoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}     
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
    )
}

export default PieChartComponent