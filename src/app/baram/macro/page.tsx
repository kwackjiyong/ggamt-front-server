'use client'

export default function BaramMacroList () {
    const macros = [
        { id: '피레호이스', desc: '천뇌삼 매크로' },
        { id: '히피체유티스', desc: '천뇌삼 매크로' },
        { id: '달에풍', desc: '천뇌삼 매크로' },
        { id: '귀염정현도리', desc: '천뇌삼 매크로' },
        { id: '가히스턴피드', desc: '천뇌삼 매크로' },
        { id: '라승철헤어', desc: '바겁알 매크로' },
        { id: '사율법사', desc: '바겁알 매크로' },
        { id: '지존영술법사', desc: '바겁알 매크로' },
        { id: '멸종위기뿌', desc: '바겁알 매크로' },
        //{ id: '장벽용', desc: '바겁알 매크로' },
        { id: '컨힐', desc: '바겁알 매크로' },
        //{ id: '율옥', desc: '바겁알 매크로' },
        { id: '투스딘', desc: '바겁알 매크로' },
        { id: '매케로이', desc: '해골굴 매크로' },
        { id: '주술재현', desc: '해골굴 매크로' },
        { id: '주술현지', desc: '해골굴 매크로' },
        { id: '철상인', desc: '해골굴 매크로' },
        { id: '만년된', desc: '양왕굴 매크로' },
        { id: '올방주아', desc: '상어심장 매크로' },
        { id: '내로매로', desc: '상어심장 매크로' },
        { id: '캐넛피큐', desc: '악어굴 생산 매크로' },
        { id: '감나무입니다', desc: '동쪽해안가 매크로' },
        { id: '비라나아', desc: '동쪽해안가 매크로' },
        { id: '무천천', desc: '동쪽해안가 매크로' },
        { id: '네크로흑마법', desc: '동쪽해안가 매크로' },
        { id: '즐겜플레이어', desc: '서쪽해안가 매크로' },
        { id: '토속초등', desc: '입장패 매크로' },
        { id: '러부닝', desc: '한고개 매크로' },
        { id: '팔이멍', desc: '한고개 매크로' },
        { id: '고철만물상', desc: '한고개 매크로' },
    ]
    const serverName = '연'
    const getUrl = (id: string) => {
        return `https://avatar.baram.nexon.com/Profile/RenderAvatar/${serverName}/${id}?is=2`
    }
    return (
        <div>
            <h4 className="baram-title">바람의나라 매크로 조회</h4>
            <div className='baram-desc-box'>
                <p> * 총 매크로 유저: {macros.length ?? 0}명</p>
                <p> * 실시간 접속여부 조회 및 매크로별 인원수 차트가 추가될 예정입니다.</p>
                <p> * 매크로는 쓰지맙시다.</p>
            </div>
            <div className="macro-container">
                {macros.map((macro)=> (
                    <div className="macro-card" key={macro.id}>
                        <div className="macro-card-header">WANTED</div>
                        <img className="macro-character-image" src={getUrl(macro.id)} alt={macro.id} />
                        <div className="macro-character-name">{macro.id}@연</div>
                        <div className="macro-character-desc">{macro.desc}</div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}