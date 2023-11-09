import SectionCard from "../../../menu/components/SectionCard";
import Profile from '../../img/profile_5.png'

const JoinSection = () => {
    return (
        <>
            <SectionCard>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[1rem] tablet:gap-[3rem] items-center'>
                        <img src={Profile} alt="#" width={160} height={160} className='w-[100px] h-[100px] tablet:w-[160px] tablet:h-[160px]'/>
                        <div>
                            <h2 className='leading-[1.15] text-[2rem] tablet:text-[3.5rem] font-bold break-all'>
                                안녕하세요, <br className='hidden tablet:block'/>프론트엔드 개발자 <br className='hidden tablet:block'/><span className="defaultPrimary">박찬민</span>입니다.
                            </h2>
                        </div>
                    </div>
                    {/*<div>
                        <p>저를 소개할게요.</p>
                    </div>*/}
                </div>
            </SectionCard>
            <SectionCard>
                <ul>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mb-[5px]'></span>제품은
                        무엇보다 <strong>사용자 중심적</strong>이어야 한다고 믿어요. 사용자의 입장에서 무엇이 더 좋은 것일지를 생각해요.
                    </li>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mb-[5px]'></span><strong>디자인 시스템 구축 및 유지보수</strong>를 통해 메이커들의
                        생산성을 높이는 데에 기여하고 있어요.
                    </li>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mb-[5px]'></span>
                        비개발직군으로서 일한 경험도, 개발직으로 일한 경험도 많아요. 덕분에 <strong>서로 다른 점을 이해하고 소통하는 능력</strong>을 가지고 있어요.
                    </li>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mb-[5px]'></span>
                        저는 저의 시간을 사랑합니다. 그래서 더욱 <strong>시간 약속에 대해서 엄격해요.</strong> 맡은 일은 반드시 끝내고야 마는 강인한 책임감과
                        집념의 소유자입니다.
                    </li>
                    <li className=''><span className='align-middle w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mb-[5px]'></span><strong>좋은 코드에 대한 고민</strong>에 더해서, 비즈니스적
                        임팩트까지 신경쓸 수 있는 개발자가 되고 싶어요!
                    </li>
                </ul>
            </SectionCard>
        </>
    )
}

export default JoinSection