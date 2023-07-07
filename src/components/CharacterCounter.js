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

import TextInput from "./TextInput";
import { charCountState } from "../selectors/charCountStateSelectors";


function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharecterCount />
        </div>
    )
}

function CharecterCount() {
    const count = useRecoilValue(charCountState);

    return <>Character Count : {count}</>
}

export default CharacterCounter;