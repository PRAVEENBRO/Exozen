import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'

const Linecharts = () => {

    const data = [
        { date: '21/06/2022', inr: 200, },
        { date: '22/06/2022', inr: 900, },
        { date: '23/06/2022', inr: 600, },
        { date: '24/06/2022', inr: 280, },
        { date: '25/06/2022', inr: 790, },
        { date: '26/06/2022', inr: 290, },
        { date: '27/06/2022', inr: 110, },
        { date: '28/06/2022', inr: 390, },
        { date: '29/06/2022', inr: 159, },
        { date: '20/06/2022', inr: 190, },
        { date: '01/07/2022', inr: 400, },
        { date: '02/07/2022', inr: 100, },
        { date: '03/07/2022', inr: 200, },
        { date: '04/07/2022', inr: 880, },
        { date: '05/07/2022', inr: 190, },
        { date: '06/07/2022', inr: 590, },
        { date: '07/07/2022', inr: 90, },
        { date: '08/07/2022', inr: 190, },
        { date: '09/07/2022', inr: 19, },
        { date: '10/07/2022', inr: 190, },
        { date: '11/07/2022', inr: 400, },
        { date: '12/07/2022', inr: 100, },
        { date: '13/07/2022', inr: 200, },
        { date: '14/07/2022', inr: 880, },
        { date: '15/07/2022', inr: 190, },
        { date: '16/07/2022', inr: 590, },
        { date: '17/07/2022', inr: 90, },
        { date: '18/07/2022', inr: 190, },
        { date: '19/07/2022', inr: 19, },
        { date: '20/07/2022', inr: 190, },
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" aspect={1.8}>
                <LineChart width={600} height={300} data={data} margin={{ top: 55, right: 20, left: -10, bottom: 5, }} >
                    <Line type="monotone" dataKey="inr" stroke="#82ca9d" activeDot={{ r: 1 }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" interval="preserveStartEnd" />
                    <YAxis dataKey="inr" />
                    <Legend verticalAlign="top" height={36} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Linecharts