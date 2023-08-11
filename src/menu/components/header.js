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


function GlobalHeader() {
  const navigate = useNavigate();

  const goToTodolist = () => {
    navigate('/todoList');
  }

  const  goToOther = () => {
    navigate('');
  }
  

    return (
      <>
      <header className="globalHeaderWrap" style={{height:'100px'}}>
        <div className="logoBox">
          <image src="" ></image>
        </div>
        <Nav></Nav>
      </header>
      </>
    );
};

export default GlobalHeader;