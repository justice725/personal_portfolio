//recoil root
import React from "react";
import {
    useRecoilValue
} from 'recoil';
//recoil root

import { charCountState } from '../selectors/charCountStateSelectors';
import TextInput from './TextInput';


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