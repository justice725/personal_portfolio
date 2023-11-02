import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { useNavigate, Link } from "react-router-dom";
import navLinks from "./navLinks";
import Nav from "./nav";
import '../../publicSource/css/public.scss';
import { styled } from "styled-components";
import ScrollProgress from "../../publicSource/components/scroll/ScrollProgress";

function GlobalHeader({headerRef}) {
  /* const navigate = useNavigate();

  const goToTodolist = () => {
    navigate('/todoList');
  }

  const  goToOther = () => {
    navigate('');
  } */
  
    return (
      <HeaderWrapper>
        <header className="globalHeaderWrap" ref={headerRef}>
          <Nav></Nav>
        </header>
        <ScrollProgress></ScrollProgress>
      </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  position:fixed;
  top:0;
  left:0;
  z-index: 9999;
`

export default GlobalHeader;