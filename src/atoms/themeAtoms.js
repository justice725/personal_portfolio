import { atom } from "recoil";
import { Styled } from "styled-components";
import styled from "styled-components";
import '../css/todoListCss.scss';

export const themesAtom = atom({
    key:'themesAtoms',
    default:false,
});

export const lightTheme = {
    textColor: '#fff',
    backgroundColor:'#007CBD',
    border:'#fff',
};

export const darkTheme = {
    textColor:'#007CBD',
    backgroundColor:'#fdfdfd',
    border:'#007CBD',
};