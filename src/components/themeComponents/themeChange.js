//recoil root
import React from "react";
import {
    useRecoilState, useRecoilValue
} from 'recoil';
import { themesAtom } from "../../atoms/themeAtoms";
import '../../css/darkmode.scss';
import { currentThemeSelector } from "../../selectors/themeSelector/themeCurrentSelector";



/* import LocalStorage from "../../storage/LocalStorage"; */

function ThemeChange() {
    const [theme, setTheme] = useRecoilState(themesAtom);
    const themeCurrent = useRecoilValue(currentThemeSelector);

    

  const themeChangeFnc = () => {
    if(theme == 'light') {
      setTheme('dark');
      
    } else {
      setTheme('light');
      
    }
  }

  let themeCurrentText = '';

    if(themeCurrent ==  'light') {
        themeCurrentText = '라이트 모드';
    } else {
        themeCurrentText = '다크 모드';
    }

    return(
        <>
        <div className="themeToggleBox">
            <div className="absoluteBox">
                <span className="themeToggleText">{themeCurrentText}</span>
                <button className='themeChangeBtn' onClick={themeChangeFnc}>theme Change Button</button>
            </div>
            
        </div>
        </>
        
    )
}

export default ThemeChange;