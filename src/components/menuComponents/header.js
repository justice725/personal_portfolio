import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { useNavigate } from "react-router-dom";

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
      <header className="globalHeaderWrap">
        <div className="logoBox">
          <image src="" ></image>
        </div>
        <div>
          <ul>
            <li><a onClick={goToTodolist}>todoList</a></li>
            <li><a onClick={goToOther}>서브메뉴</a></li>
          </ul>
        </div>
      </header>
      </>
    );
};

export default GlobalHeader;