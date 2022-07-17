import React from 'react'
import { ResponsiveContainer, Pie, PieChart } from 'recharts'
import './PieCharts.css'
const PieCharts = ({ data12 }) => {

    return (
        <div style={{ width: '100%', height: 200 }} className="">
            <ResponsiveContainer>
                <PieChart >
                    <Pie data={data12} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}  />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieCharts