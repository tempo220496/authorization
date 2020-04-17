import React from 'react';
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar';
import DashMain from '../../components/AdminPanel/DashMain/DashMain';
import { Switch, Route } from 'react-router';
import Analytics from '../../components/AdminPanel/Analytics/Analytics';
import Sells from '../../components/AdminPanel/Sells/Sells';
import "./Dashboard.css"

const Dashboard = ({history}) => {
    return (
        <div className="dashboard">
            <Sidebar />
            <DashMain history={history}>
                <Switch>
                    <Route exact path="/dashboard/analytics" component={Analytics} />
                    <Route exact path="/dashboard/sells" component={Sells} />
                </Switch>
            </DashMain>
        </div>
    );
}

export default Dashboard;
