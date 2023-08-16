
//recoil root
import React from "react";
import {
  useRecoilState
} from 'recoil';




// styled components
// styled components

// css
import './publicSource/css/public.scss';
import './theme/css/darkmode.scss';


import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/atoms/theme';
import { darkTheme, lightTheme, themesAtom } from './theme/atoms/themeAtoms';

// css

// theme
import GlobalHeader from './menu/components/header';
// theme

function App() {

  const [theme, setTheme] = useRecoilState(themesAtom);

  if(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />

          <GlobalHeader />

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