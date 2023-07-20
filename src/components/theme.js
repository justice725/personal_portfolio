import { createGlobalStyle } from 'styled-components';
import { themedPalette } from '../atoms/themeAtoms';

const cssVar = (name) => `var(==${name})`;

export const GlobalStyle = createGlobalStyle`

    body {
        background-color: ${({theme}) => theme.bg_page1};
    }
    
    .bg_2 {
        background-color: ${({theme}) => theme.bg_page2};
    }

    .bg_el1 {
        background-color: ${({theme}) => theme.bg_element1};
    }

    .bg_el2 {
        background-color: ${({theme}) => theme.bg_element2};
    }
    
    .bg_el3 {
        background-color: ${({theme}) => theme.bg_element3};
    }

    .bg_el4 {
        background-color: ${({theme}) => theme.bg_element4};
    }
    
    .text1 {
        color:${({theme}) => theme.text1};
    }

    .text2 {
        color:${({theme}) => theme.text2};
    }

    .text3 {
        color:${({theme}) => theme.text3};
    }

    .text4 {
        color:${({theme}) => theme.text4};
    }

    .border1 {
        border: 1px solid ${({theme}) => theme.border1};
    }
    
    .border2 {
        border: 1px solid ${({theme}) => theme.border2};
    }

    .border3 {
        border: 1px solid ${({theme}) => theme.border3};
    }

    .border4 {
        border: 1px solid ${({theme}) => theme.border4};
    }

    .themeToggleText {
        color:${({theme}) => theme.text1};
    }

    .cssVar {
        color:${themedPalette.text};
        background: ${themedPalette.background};
    }
    
`;
// themedPalette -> styled-components에서 css variable 사용하는 방법--
// themeAtoms.js 에서 초기 세팅 및 변수화 진행
// 여기서 사용할 때 css root 변수 창출 되어 있는지 확인
// --> 추가로, perfers-color-scheme로 다크모드 진행해야 함,,, 현재 themeProvider 사용하는 방법과 다르니 수정 진행
export default GlobalStyle;