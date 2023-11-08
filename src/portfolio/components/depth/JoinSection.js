import SectionCard from "../../../menu/components/SectionCard";

const JoinSection = () => {
    return (
        <>
            <SectionCard>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <img src="" alt="#" width={160} height={160}/>
                        <div>
                            <h2 className='leading-[1.15] text-[3.5rem] font-bold'>
                                안녕하세요, <br/>프론트엔드 개발자 <br/><span className="defaultPrimary">박찬민</span>입니다.
                            </h2>
                        </div>
                    </div>
                    <div>
                        <p>저를 소개할게요.</p>
                    </div>
                </div>
            </SectionCard>
            <SectionCard>
                <ul>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] '></span>제품은 무엇보다 <strong>사용자 중심적</strong>이어야 한다고 믿어요. 따라서 UI/UX에 높은 가치를 두며, UX를 개선하는 일에 관심이 많습니다.</li>
                    <li className=''><span className='circle_point'></span><strong>디자인 시스템 구축 및 유지보수</strong>를 통해 메이커들의 생산성을 높이는 데에 기여하고 있어요.</li>
                    <li className=''><span className='circle_point'></span>비개발직군으로서 개발직군과 소통한 경험이 많아요. 덕분에 다양한 유관 부서와 <strong>원활한 커뮤니케이션</strong>이 가능합니다.</li>
                    <li className=''><span className='circle_point'></span>맡은 일은 반드시 끝내고야 마는 강인한 <strong>책임감과 집념</strong>의 소유자입니다.</li>
                    <li className=''><span className='circle_point'></span><strong>좋은 코드에 대한 고민</strong>에 더해서, 비즈니스적 임팩트까지 신경쓸 수 있는 개발자가 되고 싶어요!</li>
                </ul>
            </SectionCard>
        </>
    )
}

export default JoinSection