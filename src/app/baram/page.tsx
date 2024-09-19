'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BaramHistoryService } from '@/service/baram';
import { PureComponent, useEffect, useMemo, useState } from 'react';
import { TimeHistory } from '@/service/baram/interface/timeHistory.interface';
import * as gtag from '@/util/gtag';

interface TimeHistoryGroup {
  date: string
  user: number
  jobs: Array<TimeHistory>
}
const job = ['전사', '도적', '주술사', '도사', '궁사', '천인', '마도사', '영술사', '차사', '살수']
const CustomTooltip = (arg: { active: any, payload: Array<{payload: TimeHistoryGroup}>, label: string }) => {
  if (arg.active && arg.payload && arg.payload.length > 0) {
    const target = arg.payload[0].payload
    return (
      <div className="custom-tooltip">
        <p className="label">{`${arg.label}`}</p>
        <p className="label">{`동시 접속자 수: ${target.user}명`}</p>
        <div className="grid">
          <div className="grid-child">
            <p className="intro">{`${job[0]} : ${target.jobs[0].accCnt}명`}</p>
            <p className="intro">{`${job[1]} : ${target.jobs[1].accCnt}명`}</p>
            <p className="intro">{`${job[2]} : ${target.jobs[2].accCnt}명`}</p>
            <p className="intro">{`${job[3]} : ${target.jobs[3].accCnt}명`}</p>
            <p className="intro">{`${job[4]} : ${target.jobs[4].accCnt}명`}</p>
          </div>
          <div className="grid-child">
            <p className="intro">{`${job[5]} : ${target.jobs[5].accCnt}명`}</p>
            <p className="intro">{`${job[6]} : ${target.jobs[6].accCnt}명`}</p>
            <p className="intro">{`${job[7]} : ${target.jobs[7].accCnt}명`}</p>
            <p className="intro">{`${job[8]} : ${target.jobs[8].accCnt}명`}</p>
            <p className="intro">{`${job[9]} : ${target.jobs[9].accCnt}명`}</p>
          </div>
        </div>
        {/* <p className="desc">상위 10만명을 기준으로 조회한 데이터입니다.</p> */}
      </div>
    );
  }

  return null;
};
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props as any;
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}
export default function BaramChart () {
  const [timeHistory, setTimeHistory] = useState<Array<TimeHistoryGroup>>([]);
  const [isShowLabel, setIsShowLabel] = useState(false);
  const [isShowLatest, setIsShowLatest] = useState(false);
  gtag.pageview('/baram');
  const state = {
    dayHistory: [],
    timeHistory: [] 
    };
    const bhs = new BaramHistoryService();

    const computedTimeHistory = useMemo(() => {
      console.log('Computed value is recalculated');
      if (isShowLatest) {
        return timeHistory.slice(timeHistory.length -12, timeHistory.length);
      } else {
        return timeHistory;
      }
    }, [timeHistory, isShowLatest]);

    // init
    useEffect(() => {
      /**
       * 접속자수 히스토리 데이터 조회 및 데이터정합
       */
      const requestHistory = async () => {
        const res = await bhs.requestBaramHistory()
          console.log(res)
          const chartData = res.timeHistoryList?.reduce((r, d) => {
            const key = d.hsDttm;
            let group = r.find(a => a.date === key)
            if (!group) {
              group = {
                date: d.hsDttm,
                user: 0,
                jobs: []
              };
              r.push(group);
            }
            group.user += d.accCnt
            group.jobs.push(d)
            
            return r;
          },[] as Array<TimeHistoryGroup>)
          setTimeHistory(chartData)
      }
      requestHistory();
    }, [])

    const handleToggleShowLabel = () => {
      setIsShowLabel(!isShowLabel);
    }

    const handleToggleShowLatest = () => {
      setIsShowLatest(!isShowLatest);
    }

    return (
      <div>
        <h4 className="baram-title">바람의나라 동시 접속자 수</h4>
        <div className="baram-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                  data={computedTimeHistory}
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
                  <Tooltip content={<CustomTooltip active={undefined} payload={[]} label={''} />}/>
                  {/* <Legend content={<CustomizedLegend />}/> */}
                  <Line type="monotone" dataKey="user" stroke="#a18c6d" activeDot={{ r: 6 }} label={ isShowLabel && (<CustomizedLabel />)}/>
              </LineChart>
            </ResponsiveContainer>
        </div>
        <div className='baram-desc-box'>
          <button onClick={handleToggleShowLabel} className="toggle-button">
            라벨 {isShowLabel ? '보기' : '숨기기'}
          </button>
          <button onClick={handleToggleShowLatest} className="toggle-button">
            {isShowLatest ? '최근 12시간' : '전체보기'}
          </button>
          <p> * <b>랭킹페이지 스크래핑이 막힌 관계로 더이상 새로운 수집을 진행하기 어렵게 되었습니다.</b></p>
          <p> * <b>이전에 수집된 데이터만 노출하는게 가능할 것 같습니다.</b></p>
          <p> * <b>정책상 해당 페이지는 한달 후 삭제됩니다.</b></p>
          <br />
          <p> * 연서버 기준으로 조회됩니다.</p>            
          <p> * 랭킹 상위 10만명을 기준으로 수집한 데이터입니다.</p>
          <p> * 수집 데이터는 언제든 수정/삭제될 수 있습니다.</p>
          <p> * 문의는 비승급@연으로 편지 주세요.</p>          
        </div>
      </div>
    )
}