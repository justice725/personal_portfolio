import {selector, useSetRecoilState} from "recoil";
import { textState } from "../atoms/textState";

export const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms / selectors)
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    },
});
