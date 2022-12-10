import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../Components/Home/Home/Home';
import SideNav from '../../Components/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <SideNav></SideNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;