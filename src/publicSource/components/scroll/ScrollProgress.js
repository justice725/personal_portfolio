import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    MouseEvent,
} from 'react';
import { styled } from 'styled-components';

const ScrollProgress = () => {
    const [width, setWidth] = useState(0);
    // 스크롤 진행도에 따른 상태관리

    const progressRef = useRef(null);
    // 가장 부모 태그에 ref를 걸어주기 위한 변수

    return(
        <>
            {/* <div className='ScrollProgress' ref={progressRef}>
                <div className='ScrollProgress_progress' style={{width:width+'%'}}>

                </div>
            </div> */}
            <ScrollProgressBox ref={progressRef}>
                <ScrollProgress_progress style={{width:width+'%'}}>
                </ScrollProgress_progress>
            </ScrollProgressBox>
        </>
    )
}

const ScrollProgressBox = styled.div `
    width:100%;
    height:4px;
    background-color:gray;
    position:relative;

    z-index:10;
`

const ScrollProgress_progress = styled.div`
    height:100%;
    background-color:blue;
`

export default ScrollProgress;