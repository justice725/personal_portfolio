//recoil root
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
//recoil root

import { textState } from "../atoms/textState";

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange}></input>
            <br />
            Echo: {text}
        </div>
    );
}

export default TextInput;