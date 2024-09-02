'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BaramHistoryService } from '@/service/baram';
import { useEffect, useState } from 'react';

export default function BaramChart () {
  const job = ['전사', '도적', '주술사', '도사', '궁사', '천인', '마도사', '영술사', '차사', '살수']
  const [timeHistory, setTimeHistory] = useState< {date: string; user: number; }[]>([]);
  const state = {
    dayHistory: [],
    timeHistory: [] 
    };
    const bhs = new BaramHistoryService();
    // init
    useEffect(() => {
      const requestHistory = async () => {
        const res = await bhs.requestBaramHistory()
          console.log(res)
          const chartData = res.timeHistoryList.map(r => {
            return {
              date: r.hsDttm + `[${job[r.jobTp]}]`,
              job: job[r.jobTp],
              user: r.accCnt
            }
          }) ?? []
          setTimeHistory(chartData)
      }
      requestHistory();
    }, [])

    return (
        <div className="baram-chart-container">
            <h4 className="baram-title">바람의나라 동시 접속자 수</h4>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={timeHistory}
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
                    {/* <Legend content={<CustomizedLegend />}/> */}
                    <Line type="monotone" dataKey="user" stroke="#82ca9d" activeDot={{ r: 6 }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

// function CustomizedLegend(props: any) {
//   const { payload } = props;
//   const label = ['동시 접속자 수']
//   const color = ['#8884d8']
//   return (
//     <ul>
//       {
//         payload.map((entry: any, index: number) => (
//           <li key={`item-${index}`} style={{ color: color[index] }}>{entry.value + label[index]}</li>
//         ))
//       }
//     </ul>
//   )
// }