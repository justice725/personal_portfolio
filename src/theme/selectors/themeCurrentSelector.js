import { selector, useSetRecoilState } from "recoil";
import { themesAtom } from "../atoms/themeAtoms";

export const currentThemeSelector = selector({
    key: 'currentThemeSelector',
    get: ({get}) => {
        const themeCurrent = get(themesAtom);

        return themeCurrent;
    }
});

