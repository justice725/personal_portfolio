//recoil root
import React from "react";
import { animated, useTransition } from "react-spring";
import {
  useRecoilState, useRecoilValue
} from 'recoil';

import { styled } from "styled-components";
import { themesAtom } from "../atoms/themeAtoms";
import '../css/darkmode.scss';
import { currentThemeSelector } from '../selectors/themeCurrentSelector';
import DarkImg1 from "./darkImg1";
import LightImg1 from "./lightImg1";

function ThemeChange() {
    const [theme, setTheme] = useRecoilState(themesAtom);
    const themeCurrent = useRecoilValue(currentThemeSelector);

  const themeChangeFnc = () => {
    if(theme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  let themeCurrentText = '';

    if(themeCurrent ==  'light') {
        themeCurrentText = '라이트 모드';
    } else {
        themeCurrentText = '다크 모드';
    }
    // 여기까지 다크모드 온클릭 설정

    // 다크모드 애니메이션 설정
    const isDark = theme === 'dark';
    const transitions = useTransition(isDark, {
      initial: {
        transform:'scale(1) rotate(0deg)',
        opacity:1,
      },
      from:{
        transform:'scale(1.5) rotate(-180deg)',
        opacity:0,
      },
      enter: {
        transform:'scale(1) rotate(0deg)',
        opacity:1,
      },
      leave: {
        transform:'scale(1.5) rotate(180deg)',
        opacity:0,
      },

      reverse:true,
    })

    return(
        <>
        <div className="themeToggleBox">
            <div className="absoluteBox transition_all br_5" onClick={themeChangeFnc} >
              
              {transitions((style, item) =>
                item ? (
                  <Positioner>
                    <AnimatedSVGWrapper style={style}>
                      <LightImg1 />
                    </AnimatedSVGWrapper>
                  </Positioner>
                ) : (
                  <Positioner>
                    <AnimatedSVGWrapper style={style}>
                      <DarkImg1 />
                    </AnimatedSVGWrapper>
                  </Positioner>
                ),
              )}
              
            </div>
            
        </div>
        </>
        
    )
}

const Positioner = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
  svg {
    display:block;
  }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeChange;