'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BaramChart() {
    const data = [
        {
            date: '',
            user: 0,
        },
        {
          date: '24.08.14',
          user: 5970,
        },
        {
          date: '24.08.16',
          user: 5567,
        },
        {
          date: '24.08.18',
          user: 5756,
        },
        {
          date: '24.08.19',
          user: 5721,
        },
      ];
    return (
        <div className="baram-chart-container">
            <h4 className="baram-title">바람의나라 동시 접속자 수</h4>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                    <Line type="monotone" dataKey="user" stroke="#82ca9d" activeDot={{r : 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}