import React from "react";
import styled, {css} from "styled-components";
import '../css/todoListCss.scss';

const StyledButton = styled.button`
    // 버튼 공통 스타일 적용
    font-size: 1rem;
    border: 1px solid #f0f3f5;
    cursor: var(--cursor-point);
    // 버튼 공통 스타일 적용

    // 특정 버튼에 대한 스타일 적용
    color: ${({color}) => color !== "" ? color : "var(--primary-text)"}; 
    // ********************* 현재 scss에서 정의된 css variable 속성은 따옴표 안에 들어가지 못해서 적용되지 않는 것으로 보임
    // ********************* 문제 해결을 위해서 3항 연산자 내에서 css variable 사용이 가능한지 확인 필요
    background-color: ${({background}) => background !== "" ? background : "#fff"};
    // 특정 버튼에 대한 스타일 적용

    ${(props) => 
    props.primary && //primary가 존재할 경우 
    css`
        color: red;
        background-color: green;
    `}

    ${(props) =>
    props.aleart && // aleart가 존재할 경우
    css`
        color:'#dbdbdb';
        background-color: '#202b38';
    `}
`;

const PrimaryText = css`
    color: '#aaa';
`;

function Button({children/* , color, background */, ...props}) {
    return <StyledButton /* color={color} background={background} */ {...props}>{children}</StyledButton>;
}

export default Button;