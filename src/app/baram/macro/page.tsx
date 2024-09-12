'use client'

import { PureComponent, useEffect, useMemo, useState } from 'react';
import { MacroLiveInfoInterface } from '@/service/baram/interface/responseBaramMacroCurrent.interface';
import { BaramMacroService } from '@/service/baram';

export default function BaramMacroList () {
    const [macroInfos, setMacroInfos] = useState<Array<MacroLiveInfoInterface>>([]);
    const [macroCnt, setMacroCnt] = useState(0);
    const [macroLiveCnt, setMacroLiveCnt] = useState(0);
    const [gthrDttm, setGthrDttm] = useState('');
    const baramMacroService = new BaramMacroService();
    useEffect(() => {

        const requestMacroInfos = async () => {
            const res = await baramMacroService.requestBaramMacro();
            if(res) {
                setGthrDttm(res.gthrDttm ?? '');
                setMacroInfos(res.macroInfos?.toSorted((a, b) => a.isLive ? -1 : 1) ?? []);
                setMacroCnt(res.macroInfos?.length ?? 0);
                setMacroLiveCnt(res.macroInfos?.filter(r=>r.isLive)?.length ?? 0);
            }
        }
        requestMacroInfos();
    },[]);
    
    const serverName = '연'
    const getUrl = (id: string) => {
        return `https://avatar.baram.nexon.com/Profile/RenderAvatar/${serverName}/${id}?is=2`
    }
    return (
        <div>
            <h4 className="baram-title">바람의나라 매크로 조회</h4>
            <div className='baram-desc-box'>
                <p> * 현재 매크로 유저 {macroLiveCnt} 명이 접속 중 입니다. (총원 {macroCnt}명 중)</p>
                <p> * 최근수집일시: {gthrDttm}</p>
                <p> * 접속여부는 10분마다 갱신됩니다.</p>
                <p> * 매크로는 쓰지맙시다.</p>
            </div>
            <div className="macro-container">
                {macroInfos.map((macro)=> (
                    <div className="macro-card" key={macro.id}>
                        <div className="macro-card-header">WANTED</div>
                        
                        <div className="macro-character-image-container">
                            <div className={`macro-character-image-box ${macro.isLive ? 'on' : 'off'}`}>
                                <img className={`macro-character-image ${macro.isLive ? 'on' : 'off'}`}  src={getUrl(macro.userName)} alt={macro.userName} />
                            </div>
                        </div>
                        <div className="macro-character-name">{macro.userName}@연</div>
                        <div className="macro-character-desc">{macro.description}</div>
                        {/* <div className={`macro-character-live ${macro.isLive ? 'on' : ''}`}>{macro.isLive ? '접속중' : '미접속'}</div> */}
                    </div>
                ))}
                
            </div>
        </div>
    )
}