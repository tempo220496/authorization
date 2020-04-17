import React from 'react';
import DashNav from '../DashNav/DashNav';

import "./Sidebar.css"
import Logo from './Logo/Logo';

const Sidebar = () => {
    return (
        <aside className="dash-sidebar">
            <Logo />
            <DashNav />
        </aside>
    );
}

export default Sidebar;
