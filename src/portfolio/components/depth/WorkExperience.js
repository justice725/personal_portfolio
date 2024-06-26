import SectionCard from "../../../menu/components/SectionCard";
import euclidLogo from '../../img/euclid_logo_color.png'
import cennoLogo from '../../img/cenno_logo.png'

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
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div
                                className="w-[100px] h-[100px] border-box relative p-[0.5rem] flex justify-center items-center rounded-[10px] bg-white">
                                <img src={euclidLogo} alt="#" className="w-full"/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>유클리드소프트</h2>
                                <p>UI/UX Engineer</p>
                                <p>2023.05 - 재직중</p>
                            </div>
                        </div>
                        <div>


                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">CCTV 실시간 모니터링 시스템 ALL-Keeper
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">
                                        CCTV 실시간 모니터링 시스템 All-Keeper의 프론트 소스 개발 업무를 담당하였습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>html</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>js</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>async</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    All-Keeper의 프론트엔드 전반 및 퍼블리싱을 담당하였습니다. 해당 프로젝트 어드민 시스템에 관여하였고, 공통
                                                    스크립트 소스 작성 및 html 소스를 작성하였습니다.
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    전통적인 웹 개발 방식을 사용하여 데이터베이스와 쿼리를 연동하는 과정에서 DOM이 과부화되지 않도록 스크립트 코드를
                                                    작성하였습니다.
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    디바이스 별로 사용자가 화면을 동일한 경험을 통해 확인할 수 있도록 코드를 세분화하여 공통화 작업을 진행하였습니다.
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">ABC 부트캠프 리디자인 프로젝트 참여 <a
                                        href="https://abcbootcamp.kr/" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">
                                        사내 사업 중 '미래 내일 일경험사업(ESG지원형)' 사업의 일환인 ABC 부트캠프 프로젝트의 리디자인 프로젝트에 참여하여 퍼블리싱 및 프론트
                                        고도화 사업을 성공적으로 진행하였습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Django</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Jquery</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>html</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>css</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[1rem]'>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    Django 템플릿을 활용한 프론트 소스 공통화 및 고도화
                                                </div>
                                                <ul className='flex flex-col ml-[1rem]'>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        고도화 사업의 일환으로 리디자인 프로젝트에 퍼블리싱 지원으로 참여하였습니다.
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        해당 소스는 Django로 작성되어 있었는데, 오래된 코드이다보니 공통화 및 소스의 통일이 되어있지 않은 문제점이
                                                        있었습니다.
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        소스를 통일하고 block 형식으로 컴포넌트를 분리하면서 공통화 작업에 기여
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        이를 통해 디바이스 및 환경에 국한되지 않는 사용자 경험 개선
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    프론트 UX 개선과 함께 어드민 환경 개선 작업에 함께 참여하였습니다.
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">한국산업기술평가관리원 RCMS UX/시각화 화면 퍼블리싱 지원{/*<a
                                        href="https://abcbootcamp.kr/" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>*/}
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">
                                        국가사업 지원의 일환으로 RCMS 지역별사용현황, 대외통계 페이지 작성 사업에 지원하였습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>WebSquare</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Javascript</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Xml</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>

                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    국가사업의 일환으로 서비스 페이지 내 데이터 시각화 작업을 지원하였습니다. 페이지 퍼블리싱 및 데이터 연동에 따른 공통
                                                    스크립트 작업을 진행하였습니다.
                                                </div>
                                            </li>
                                            <li className='mb-[1rem]'>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    데이터 시각화 연동 확인, 데이터 화면에 띄울 때 적용되는 스크립트 코드 작성
                                                </div>
                                                <ul className='flex flex-col ml-[1rem]'>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        미리 작성된 WRM 데이터 통신 format에 맞게 화면에 오브젝트를 생성
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        웹스퀘어 페이지 및 서비스 요청시 사용자 로그인 세션이 존재하는지 체크
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        지도 및 테이블, 그래프 형식으로 데이터 시각화
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        화면 적용 애니메이션 및 라이브러리 설정
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">Home-Service <a
                                        href="https://euclidsoft.co.kr/" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">유클리드소프트
                                        홈페이지 서비스의 개발 및 유지보수, UI/UX 개선을 담당하고 있습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Next.js</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Framer
                                            motion</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>tailwind
                                            css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Recoil</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>slick-corousel</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>scss</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[1rem]'>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    렌더링시 발생하는 FOUC(Flash Of Unstyled Content) 버그를 수정하여 UX를 개선
                                                </div>
                                                <ul className='flex flex-col ml-[1rem]'>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        NextJs로 작성된 페이지에서 발생하는 문제로, 상태 변경에 따라 렌더링 시에 레이아웃이 틀어지는 현상 발견
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        원인은 tailwindCss가 런타임에 동적으로 스타일을 적용하기 위해 렌더링 되는 시점이 DOM이 css를
                                                        불러오는
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

                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    css와 js가 렌더링 되는 중간 과정에 발생하는 오류를 줄이기 위하여 해당 컨텐츠들의 렌더링 시점을
                                                    변경, 수정하여 해당 현상이 반복되는 것을 개선
                                                </div>
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


                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">AI-Labeling Platform <a
                                        href="https://www.labelon.kr/" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">AI
                                        학습데이터를 구축하는 프로젝트에서 소프트웨어를 유지보수 및 개선하는 작업을 진행하였습니다.
                                    </div>
                                    {/*<div className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem]'>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Next.js</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Framer motion</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>tailwind css</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>Recoil</p>
                                    <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] '>slick-corousel</p>
                                </div>*/}
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[1rem]'>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    프로젝트 고도화 작업의 일환으로 신규 기능 개발에 사용될 공통 컴포넌트 및 utils 유지보수
                                                </div>
                                                <ul className='flex flex-col ml-[1rem]'>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        디자이너의 의도와 다른 형태로 개발되거나, 불필요한 부분을 가감하며 공통화 작업을 진행
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="mb-[1rem]">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    다양한 형태의 사용자(사내 소통 창구) 및 실제 행위자(리뷰어)들의 의견을 수렴, 다양한 UI/UX 개선 작업 진행
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    이전까지 디자인 된 화면과 실제 개발된 화면간의 차이가 존재, 지속적인 개선 인입
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">Clinical Decision Support System</h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">환자
                                        개인 임상정보를 바탕으로 질병 진단 및 의사결정을 도와주는 프로그램에서 공통 컴포넌트 개발 및 유지보수를 담당하고 있습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem]'>React.js</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem]'>Bootstrap</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem]'>React
                                            Query</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem]'>Redux</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>scss</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[1rem]'>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    디자인 시스템을 비롯하여 생산성을 위해 사용하고 있는 각종 프로젝트 내 라이브러리 및 유틸성 컴포넌트들을 유지보수,
                                                    개선했습니다.
                                                </div>
                                                <ul className='flex flex-col ml-[1rem]'>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        공통 컴포넌트들을 사용함으로 발생한 초기 설계와 다르게 구현된 컴포넌트들을 재구성하고 분리하는 작업
                                                    </li>
                                                    <li className='circle_list'>
                                                        <span className='circle_point'></span>
                                                        신규 컴포넌트들과 기존 컴포넌트들의 충돌로 인한 버그들을 개선하고 유지보수
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="mb-[1rem]">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    해당 프로젝트 이외에도 재사용이 가능하도록 사내 라이브러리화 작업 진행
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    프로젝트 내에서 디자이너와 개발자간 상호 의사소통의 부재를 해결하기 위한 팀내 의사소통 창구 기획 및 운영
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div
                                className="w-[100px] h-[100px] border-box relative p-[0.5rem] flex justify-center items-center rounded-[10px] bg-white">
                                <img src={cennoLogo} alt="#" className="w-full"/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>첸노</h2>
                                <p>FrontEnd Engineer</p>
                                <p>2022.03 - 2023.01</p>
                            </div>
                        </div>
                        <div className="flex-auto">
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">Home-Service <a
                                        href="http://www.cenno.co.kr/" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">자사
                                        홈페이지 고도화 작업에서 FrontEnd 개발을 진행하였습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Html</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Javascript</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>JQuery</p>

                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[0rem]'>
                                                <div className="flex mb-[0.1rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    자사 홈페이지 고도화 및 리디자인 프로젝트에서 FrontEnd Developer로 프로젝트를 성공적으로 진행했습니다.
                                                </div>
                                            </li>

                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    디자이너, FrontEnd, BackEnd 총 3인 프로젝트로 진행한 프로젝트입니다.
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">Web Agency Business <a
                                        href="http://cenno.co.kr/export/html_sub/portfolio.html" target={'_blank'}
                                        rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">웹에이전시
                                        사업에 FrontEnd 개발 참여하였습니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Html</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>Javascript</p>
                                        <p className='textReverse flex border-box p-[0.3rem] bg_sticker rounded-full text-[0.7rem] px-[0.5rem] '>JQuery</p>

                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[0rem]'>
                                                <div className="flex mb-[0.1rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    이미 개발된 웹 어플리케이션의 유지보수, 총 4개의 새로운 프로젝트를 성공적으로 진행하였습니다.
                                                </div>
                                            </li>

                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    디자이너, FrontEnd, BackEnd 총 3인 프로젝트로 진행한 프로젝트입니다.
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div
                                className="w-[100px] h-[100px] border-box relative p-[0.5rem] flex justify-center items-center rounded-[10px] bg-white">
                                <img src={cennoLogo} alt="#" className="w-full"/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>첸노</h2>
                                <p>Web Designer & <br/>UI/UX Engineer</p>
                                <p>2021.12 - 2022.03</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] '>
                                    <h2 className="font-bold text-[1.25rem] ">Design <a
                                        href="http://cenno.co.kr/export/html_sub/portfolio_3.html" target={'_blank'}
                                        rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem]">마케팅
                                        및 웹 에이전시 사업의 일환으로 수많은 웹 기반 디자인 작업물 및 자사 제품의 제품 디자인 작업물의 제작과 광고성 웹 퍼블리싱 등의 업무를
                                        담당했습니다.
                                    </div>

                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className='mb-[0rem]'>
                                                <div className="flex mb-[0.1rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    자사 제품 디자인 및 광고성 페이지 디자인 및 퍼블리싱의 유지보수를 담당
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    디자인·웹에이전시 사업 매출 첫 달 '3억 5천만 원', 3개월 후 '7억 원' 매출 달성(22년 11월 기준)
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    사내 디자인 시스템 및 퍼블리싱 공통화 시스템 개발 및 유지보수
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    상품 기획, 소싱, 마케팅, 제작, 광고성 웹 제작, 운영 등 전 과정을 담당하였습니다.
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </SectionCard>
        </>
    )
}

export default WorkExperience