
//recoil root
import React from "react";
import {
  useRecoilState
} from 'recoil';
import { Routes,Route,Link } from "react-router-dom";


// css
import './publicSource/css/public.scss';
import './theme/css/darkmode.scss';
// css

// theme
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/atoms/theme';
import { darkTheme, lightTheme, themesAtom } from './theme/atoms/themeAtoms';
// theme

// header
import GlobalHeader from './menu/components/header';
import navLinks from "./menu/components/navLinks";
// header

function App() {

  const [theme, setTheme] = useRecoilState(themesAtom);

  if(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />

          <GlobalHeader />

          <Routes>
          {
            navLinks.map((nav) => (
                <Route path={nav.link} element={nav.ruth}></Route>
            ))
          }
          </Routes>
          <div style={{height:"300vh"}}></div>

        </ThemeProvider>
  );
}

export default App;

// 7월 7일 깃 레포지토리 하나 만들어서 소스 업로드 하고 scss, 다크모드에 관한 이슈들 정리해서
// 라벨온 css 건들일 때 소스 공유

// https://velog.io/@velopert/velog-dark-mode

{/* <Button color=""
        >common button</Button>
        <Button primary>primary button</Button>
        <Button children={"버튼 텍스트"}></Button> */}
        
        {/* <CharacterCounter /> */}
        {/* <StyledButton>styled-components test</StyledButton> */}