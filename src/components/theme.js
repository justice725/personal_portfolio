import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {createGlobalStyle} from 'styled-components';



export const GlobalStyle = createGlobalStyle`

    body {
        color: ${({theme}) => theme.textColor};
        background-color: ${({theme}) => theme.backgroundColor};
    }
`;

export default GlobalStyle;