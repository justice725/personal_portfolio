import SectionCard from "../../menu/components/SectionCard";

const BlogSection = () => {
    return (
        <>
            <SectionCard>
                <div>
                    <h2 className='mb-[1rem] font-bold text-[2rem] tablet:text-[2.25rem] break-keep tablet:break-all'>
                        사람은 모든 것을 기억할 수 없어요. <br/>순간의 기억이 기록이 될 때 그 기억이 가치가 있다고 생각해요.<br/>
                        그래서 블로그를 통해 <span className="defaultPrimary">'기록'</span>합니다.
                    </h2>
                    <p className={'flex relative'}>
                        <span
                            className={'circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px] break-keep'}></span>여기에
                        제 블로그를 옮겨 개인 블로그 형식으로 기재할 생각이에요.
                    </p>
                    <p className={'flex relative'}>
                        <span
                            className={'circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px] break-keep'}></span>아직은
                        블로그 기능에 대해서 연구하고 구상하고 있는 단계에요.
                    </p>
                    <p className={'flex relative'}>
                        <span
                            className={'circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px] break-keep'}></span>많은
                        기술 블로그들 중에 저는 네이버 블로그를 선택했어요. 거기에 차곡차곡 하나씩 쌓아가는 중이에요.
                    </p>
                    <p className={'flex relative'}>
                        <span
                            className={'circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px] break-keep'}></span>앞으로
                        더 멋진 모습이 될 이 곳을 기대해주세요!
                    </p>
                </div>
            </SectionCard>
            <SectionCard>
                <div className='flex w-full justify-center items-center'>
                    <a href="https://blog.naver.com/justice725" target={"_blank"} rel="noreferrer" className='inline-flex justify-center items-center rounded-[2rem] blog_link_btn p-[1rem] shadow-md w-full tablet:w-[50%]'>
                        blog 방문하러 가기
                    </a>
                </div>
            </SectionCard>
            <div className='mb-[3rem]'>

            </div>
        </>
    )
}

export default BlogSection