import { createGlobalStyle } from 'styled-components';
import { themedPalette } from './themeAtoms';

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

    .bgEl4 {
        background: ${themedPalette.bgEl4};
    }

    .br3 {
        border-color:${themedPalette.border3};
    }

    .defaultPrimary {
        color:${({theme}) => theme.defaultPrimary};
    }

    .defaultAlert {
        color:${({theme}) => theme.defaultAlert};
    }

    .primary1 {
        color:${({theme}) => theme.primary1};
    }

    .alert1 {
        color:${({theme}) => theme.alert1};
    }
    
`;
// themedPalette -> styled-components에서 css variable 사용하는 방법--
// themeAtoms.js 에서 초기 세팅 및 변수화 진행
// 여기서 사용할 때 css root 변수 창출 되어 있는지 확인
// --> 추가로, perfers-color-scheme로 다크모드 진행해야 함,,, 현재 themeProvider 사용하는 방법과 다르니 수정 진행

// --> document.documentElement.setAttribute('data-theme', theme); 로 storage 값을 넣어서 :root 값을 설정했다.
// css variable 값을 설정하는데 성공했으나, theme.js와 public.scss 에서 2중으로 설정해야 한다는 점이 걸림돌이다.
export default GlobalStyle;