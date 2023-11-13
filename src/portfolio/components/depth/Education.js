import SectionCard from "../../../menu/components/SectionCard";

const Education = () => {
    return(
        <>
            <SectionCard bg={''}>
                <div className='flex flex-col'>
                    <div className='flex w-full border-b-[1px] border1 border-t-none'>
                        <h2 className='font-bold text-[2.25rem] primary1 '>
                            Education.
                        </h2>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>반응형 웹디자이너 과정</h2>
                                <p>2021.05 - 2021.10</p>
                                <p>프로그래밍 코스 수료</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>침례신학대학교</h2>
                                <p>2015.02 - 2021.03</p>
                                <p>신학과 전공</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </>
    )
}

export default Education