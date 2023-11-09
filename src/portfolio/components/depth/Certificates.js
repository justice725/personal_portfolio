import SectionCard from "../../../menu/components/SectionCard";

const Certificates = () => {
    return (
        <>
            <SectionCard bg={''}>
                <div className='flex flex-col'>
                    <div className='flex w-full border-b-[1px] border1 border-t-none'>
                        <h2 className='font-bold text-[2.25rem] primary1 '>
                            Certificates.
                        </h2>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title1 tablet:mb-[0.2rem]'>GTQ 1급</h2>
                                <p>2021.07.</p>
                                <p>한국생산성본부</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title1 tablet:mb-[0.2rem]'>웹디자인기능사</h2>
                                <p>2021.07.</p>
                                <p>한국산업인력공단</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </>
    )
}

export default Certificates