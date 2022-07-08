import Header from "./Header";
import {Outlet} from 'react-router-dom';
import React from 'react';
import {useThemeContext} from "./ThemeContext";

function Layout({onThemeChange}) {
    const theme = useThemeContext();
    const className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
    return (
        <div className={className}>
            <Header onThemeChange={onThemeChange}/>
            <Outlet/>
        </div>
    )
}
export default Layout;