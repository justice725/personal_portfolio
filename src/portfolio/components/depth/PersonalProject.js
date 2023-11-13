import euclidLogo from "../../img/euclid_logo_color.png";
import cennoLogo from "../../img/cenno_logo.png";
import SectionCard from "../../../menu/components/SectionCard";
import {ReactComponent as LogoImage} from '../../../menu/components/logobox/logoType.svg';

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
                                <LogoImage width={50} height={50}/>
                            </div>
                            <div>
                                <h2 className='font-bold text-[1.25rem] title2 tablet:mb-[0.2rem]'>개인 포트폴리오</h2>
                                <p>2023.07 - 2023.11</p>
                            </div>
                        </div>
                        <div>
                            <div className='border-l-[1px] border5 '>
                                <div className='border-box p-[1rem] pt-[0]'>
                                    <div
                                        className="relative border-box p-[1rem] inner_box rounded-[25px] title1 shadow-md my-[1rem] mt-[0rem]">유클리드소프트
                                        평소 해보고 싶었던, 이런건 어떨까 하면서 상상만 했던 것들이 현실이 되도록 만드는 것이 꿈입니다. <br/>
                                        그래서 저의 이름을 딴 놀이터라고 이름을 지었어요. <br/>
                                        리액트 기반으로 많은 것들을 경험해보고 있는 중입니다.
                                    </div>
                                    <div className='flex flex-row justify-start items-center gap-[0.35rem] my-[0.3rem] flex-wrap'>
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
                                                        <span className='stack_box'>React</span>를 기반인 1인 프로젝트로 개발되었습니다.
                                                        저에 대해서 소개하며 방문자들이 간단히 즐길 거리들을 만드는 것이 최종
                                                        목표에요.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div className="flex">
                                                    <span
                                                        className="circle_point w-[5px] h-[5px] min-w-[5px] min-h-[5px] mr-[8px] bg_circle inline-flex rounded-[51%] mt-[11.5px]"></span>
                                                    <div>
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
                                                    <div>
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