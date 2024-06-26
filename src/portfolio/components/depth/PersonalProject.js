import euclidLogo from "../../img/euclid_logo_color.png";
import cennoLogo from "../../img/cenno_logo.png";
import SectionCard from "../../../menu/components/SectionCard";
import {ReactComponent as LogoImage} from '../../../menu/components/logobox/logoType.svg';
import {ReactComponent as RmsLogo} from '../../../menu/components/logobox/rms_logo.svg';
import HaplLogo from "../../../menu/components/logobox/HaplLogo";

const PersonalProject = () => {
    return (
        <>
            <SectionCard bg={''}>
                <div className='flex flex-col'>
                    <div className='flex w-full border-b-[1px] border1 border-t-none'>
                        <h2 className='font-bold text-[2.25rem] primary1 '>
                            Personal Project.
                        </h2>
                    </div>

                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div
                                className="w-[100px] h-[100px] border-box relative p-[0.5rem] flex justify-center items-center rounded-[10px] bg-white">
                                <RmsLogo/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem] break-keep'>사내 대여관리
                                    시스템 RMS
                                </h2>
                                <p>2024.01 - 진행중</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] pt-[0]'>
                                    <h2 className="font-bold text-[1.25rem] mb-[8px]">Front-end <a
                                        href="https://github.com/ravenkim/rms_front" target={'_blank'}
                                        rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                        {/*<a
                                        href="https://www.figma.com/proto/Q7ReVf99cMO0o4zmm3Vngt/rms_design_system-team-library?node-id=2345-2287&scaling=scale-down&content-scaling=fixed" target={'_blank'} rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>Figma</a>*/}
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem] mt-[0rem] break-keep">
                                        사내 대여 관리 시스템을 사이드 프로젝트로 만들고 있어요. 마음이 맞는 동료들과 함께 말이죠! 너무나 흥미로운 일을 할 수 있어서 기쁩니다.
                                        react를 기반으로 사내에서 사용하는 공간 대여, 도서 대여, 강의 대여, 커뮤니티 시스템 등의 기능을 가지고 있는 프로젝트에요.

                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>React.js</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Figma</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>vite</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>tailwind
                                            css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Redux</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Redux-toolkit</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>jwt</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>docker</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className=''>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    <div className={'break-keep'}>
                                                        <span className='stack_box'>React</span>를 기반으로 사내 주니어들 4명이서
                                                        프로젝트를 진행하고 있어요.
                                                        대여 시스템을 CRUD 하는 것이 주요 기능이며, 3차 개발을 진행 중이에요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        프론트는 React와 Redux를 사용해서 소스와 전역 상태를 관리해요.
                                                        사용자는 jwt 토큰으로 관리하고 백엔드는 python, 배포는 docker를 사용했어요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex align-auto items-auto">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        저는 figma를 이용해서 프로젝트를 디자인하고, 프론트엔드 전반에 관여했고,
                                                        jwt를 이용한 회원관리, 프로젝트 공통 컴포넌트 개발, 사용자 관리 페이지 작성, 캘린더를 사용한 대여 시스템
                                                        관리 툴을 만들었어요.

                                                    </div>
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
                                <HaplLogo/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem] break-keep'>
                                    하플
                                </h2>
                                <p>2024.05 - 진행중</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] pt-[0]'>
                                    <h2 className="font-bold text-[1.25rem] mb-[8px]">Full-stack <a
                                        href="https://github.com/justice725/hapl" target={'_blank'}
                                        rel="noreferrer"
                                        className='text-[0.7rem] link_color border-box p-[0.3rem] px-[0.5rem] rounded-[15px] service_link'>link</a>
                                    </h2>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem] mt-[0rem] break-keep">
                                        교회에서 사용하는 커뮤니티 시스템 어플리케이션 하플입니다. 1인 프로젝트로 진행중이고, react-native를 사용해서 하이브리드
                                        어플리케이션으로 개발하고 있어요.
                                        현재 작업 중이며 작업이 마무리되면 앱스토어에서 찾아볼 수 있을거에요!

                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>react-native</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Figma</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>nativewind</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Redux</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>firebase</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className=''>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    <div className={'break-keep'}>
                                                        <span className='stack_box'>react-native</span>를 기반으로 1인 개발을
                                                        진행중이에요.
                                                        이번 프로젝트는 교회에서 사용할 프라이빗한 커뮤니티 시스템입니다. 시스템 내에는 공지, sns, 일정관리, 위치
                                                        기반 공유 시스템 등의 기능들이 들어갈 예정이에요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        프론트는 react-native로 ios, android 기반 하이브리드 어플리케이션으로 제작되고 있어요.
                                                        백엔드는 no-sql를 제공하는 firebase로 작성되었습니다.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex align-auto items-auto">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        1인 개발이기 때문에 디자인부터 배포, 사후 관리까지 전부 혼자서 작업할 예정입니다.
                                                        한번도 시도해보지 않은 새로운 도전이기 때문에 기대되고 두근두근하고 있어요.
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*여기를 복사*/}
                    <div className='flex flex-col tablet:flex-row gap-[2rem] mt-[2rem]'>
                        <div className='flex flex-row tablet:flex-col gap-[2rem] tablet:gap-[0.4rem]'>
                            <div
                                className="w-[100px] h-[100px] border-box relative p-[0.5rem] flex justify-center items-center rounded-[10px] bg-white">
                                <LogoImage width={50} height={50}/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem] break-keep'>개인
                                    포트폴리오</h2>
                                <p>2023.07 - 2023.11</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] pt-[0]'>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem] mt-[0rem] break-keep">
                                        평소 해보고 싶었던, 이런건 어떨까 하면서 상상만 했던 것들이 현실이 되도록 만드는 것이 꿈입니다.
                                        그래서 저의 이름을 딴 놀이터라고 이름을 지었어요.
                                        리액트 기반으로 많은 것들을 경험해보고 있는 중입니다.
                                    </div>
                                    <div
                                        className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>React.js</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Styled-Components</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>tailwind
                                            css</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>Recoil</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>React
                                            Beautiful Dnd</p>
                                        <p className='textReverse flex border-box p-[0.3rem] px-[0.5rem] bg_sticker rounded-full text-[0.7rem] '>scss</p>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col'>
                                            <li className=''>
                                                <div className="flex mb-[0.3rem]">
                                                    <span
                                                        className='circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[10px]'></span>
                                                    <div>
                                                        <span className='stack_box'>React</span>를 기반한 1인 프로젝트로 개발되었습니다.
                                                        저에 대해서 소개하며 방문자들이 간단히 즐길 거리들을 만드는 것이 최종
                                                        목표에요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        <span className='stack_box'>Styled-components</span>와 <span
                                                        className='stack_box'>Scss</span> 그리고 <span
                                                        className='stack_box'>Localstorage</span>를 사용해서 다크모드를 구현했어요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex align-auto items-auto">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-block rounded-[51%] mt-[11.5px]"></span>
                                                    <div className={'break-keep'}>
                                                        <span className='stack_box'>React Beautiful Dnd</span> 라이브러리를
                                                        사용해서 TODOLIST를 꾸미고 사용할 수 있도록 개발했어요.
                                                        추후에 데이터 베이스도 연결하고, 꿈꿔봤던 여러 기능들도 추가할 예정이에요.
                                                    </div>
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

export default PersonalProject