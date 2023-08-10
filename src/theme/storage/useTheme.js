import { useEffect } from "react";

const useTheme = (theme, toggleTheme) => {
    useEffect(() => {
        window.localStorage.setItem('app_theme', theme);
    }, [theme])

    return [theme, toggleTheme];
}

export default useTheme;