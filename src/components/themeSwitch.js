/* import React from "react";
import { useRecoilState } from "recoil";
import { useTheme } from "styled-components";

function ThemeSwitch() {
    const [theme, setTheme] = useRecoilState(themeState);

    
    const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
    

    const handleClick = () => {
        if(theme === ThemesFlag.light ) {
            setTheme(ThemesFlag.dark);
            console.log("모드 변경했을걸");
            
        } else {
            setTheme(ThemesFlag.light);
            console.log("모드 변경했을걸 아닐까");
            
        }
    }

    return(
        <button onClick={handleClick}>모드변경</button>
    )
}

export default ThemeSwitch; */