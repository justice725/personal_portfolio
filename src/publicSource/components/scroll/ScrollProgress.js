import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { styled } from 'styled-components';

const ScrollProgress = memo(() => {
    const [width, setWidth] = useState(0);
    const progressRef = useRef(null);
  
    const handleScroll = useCallback(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
      if (scrollTop === 0) {
        setWidth(0);
        return;
      }
  
      const windowHeight = scrollHeight - clientHeight;
      const currentPercent = (scrollTop / windowHeight);
  
      setWidth(currentPercent * 100);
    }, []);
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, true);
  
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
      }
    }, [handleScroll]);

    return(
        <>
            <ScrollProgressBox ref={progressRef}>
                <ScrollProgress_progress style={{width:width+'%'}} />
            </ScrollProgressBox>
        </>
    )
});

const ScrollProgressBox = styled.div `
    width:100%;
    height:4px;
    background-color:#868E96;
    position:relative;

    z-index:10;
    cursor:pointer;
`

const ScrollProgress_progress = styled.div`
    height:100%;
    background-color:#3d5afe;
`

export default ScrollProgress;