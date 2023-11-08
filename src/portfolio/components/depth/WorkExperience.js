import SectionCard from "../../../menu/components/SectionCard";

const WorkExperience = () => {
    return (
        <>
            <SectionCard bg={''}>
                <div className='flex flex-col'>
                    <div className='flex w-full border-b-[1px] border1 border-t-none'>
                        <h2 className='font-bold text-[2.25rem] primary1 '>
                            Work Experience.
                        </h2>
                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div>
                            <img src="" alt="#"/>
                            <h2 className='font-bold text-[1.25rem] title1'>유클리드소프트</h2>
                            <p>UI/UX Engineer</p>
                            <p>2023.05 - 재직중</p>
                        </div>
                        <div className='border-l-[1px] border5 '>
                            <div className='border-box p-[1rem] '>
                                <h2>Home-Service</h2>
                                <div>유클리드소프트 홈페이지 서비스의 개발 및 유지보수, UI/UX 개선을 담당하고 있습니다.</div>
                                <div className='flex flex-row justify-start items-center gap-[0.35rem]'>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Next.js</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Framer motion</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>tailwind css</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Recoil</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>slick-corousel</p>
                                </div>
                                <div>
                                    <ul className='flex flex-col'>
                                        <li className=''>
                                            <div>
                                            <span className='circle_point'></span>
                                            렌더링시 발생하는 FOUC(Flash Of Unstyled Content) 버그를 수정하여 UX를 개선
                                                </div>
                                            <ul className='flex flex-col ml-[1rem]'>
                                                <li className='circle_list'>
                                                    <span className='circle_point'></span>
                                                    NextJs로 작성된 페이지에서 발생하는 문제로, 상태 변경에 따라 렌더링 시에 레이아웃이 틀어지는 현상 발견
                                                </li>
                                                <li className='circle_list'>
                                                    <span className='circle_point'></span>
                                                    원인은 tailwindCss가 런타임에 동적으로 스타일을 적용하기 위해 렌더링 되는 시점이 DOM이 css를 불러오는
                                                    시점과 다름에서 발생
                                                </li>
                                                <li className='circle_list'>
                                                    <span className='circle_point'></span>
                                                    초기 렌더링 되는 페이지와 로딩 애니메이션을 담당하는 컴포넌트의 렌더링 시점을 변경함으로 FOUC 개선
                                                </li>
                                                <li className='circle_list'>
                                                    <span className='circle_point'></span>
                                                    이를 통해 레이아웃이 깨져 깜빡이면서 사용자들이 겪는 불편함 해소
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span></span>
                                            css와 js가 렌더링 되는 중간 과정에 발생하는 오류를 줄이기 위하여 해당 컨텐츠들의 렌더링 시점을
                                            변경, 수정하여 해당 현상이 반복되는 것을 개선
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </>
    )
}

export default WorkExperience