'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BaramChart() {
    const data = [
        {
          date: '',
        },
        {
          date: '24.08.10',
          today: 15192,
        },
        {
          date: '24.08.13',
          today: 15327,
        },
        {
          date: '24.08.14',
          today: 15706,
        },
        {
          date: '24.08.18',
          today: 16093,
        },
        {
          date: '24.08.20',
          today: 15732,
          user: 6904,
        },
        {
          date: '24.08.21',
          user: 6885,
        },
        {
          date: '24.08.22',
          user: 6749,
        },
        {
          date: '24.08.23',
          user: 6655,
        },
        {
          date: '24.08.27',
          user: 6930,
        },
        {
          date: '24.08.28',
          user: 6910,
        },
        {
          date: '24.08.29',
          user: 6354,
        },
      ];
    return (
        <div className="baram-chart-container">
            <h4 className="baram-title">바람의나라 접속자 수</h4>
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
                    <Legend content={<CustomizedLegend />}/>
                    <Line type="monotone" dataKey="today" stroke="#8884d8" activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="user" stroke="#82ca9d" activeDot={{r : 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

function CustomizedLegend(props: any) {
  const { payload } = props;
  const label = [' 일간 접속자 수', ' 동시 접속자 수 (8pm 기준)']
  const color = ['#8884d8', '#82ca9d']
  return (
    <ul>
      {
        payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ color: color[index] }}>{entry.value + label[index]}</li>
        ))
      }
    </ul>
  )
}