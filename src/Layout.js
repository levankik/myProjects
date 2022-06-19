import Header from "./Header";
import {Outlet} from 'react-router-dom';
import React from 'react';

function Layout() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Layout;