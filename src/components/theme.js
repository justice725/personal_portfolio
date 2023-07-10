import { createGlobalStyle } from 'styled-components';



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

    }
    
    .border2 {

    }

    .border3 {

    }

    .border4 {

    }

    .themeToggleText {
        color:${({theme}) => theme.text1};
    }
`;

export default GlobalStyle;