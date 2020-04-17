import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import "./DashNav.css";

const DashNav = () => {
    return (
        <nav className="dash-nav">
            <NavLink exact to="/dashboard/analytics" className="dash-nav__link">
                <Icon name="chart line" size="large" className="dash-nav__link-icon" />
                <span className="dash-nav__link-text">Analytics</span>
            </NavLink>
            <NavLink exact to="/dashboard/sells" className="dash-nav__link">
                <Icon name="chart bar" size="large" className="dash-nav__link-icon" />
                <span className="dash-nav__link-text">Sells</span>
            </NavLink> 
        </nav>
    );
}

export default DashNav;
