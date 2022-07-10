import React, {useContext} from "react";

const ThemeContext = React.createContext('light');

export function useThemeContext () {
    return useContext(ThemeContext);
}

export default ThemeContext;



