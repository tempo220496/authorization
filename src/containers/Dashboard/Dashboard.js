import React, { useState } from 'react';
import Sidebar from '../../components/AdminPanel/Sidebar/Sidebar';
import DashMain from '../../components/AdminPanel/DashMain/DashMain';
import { Switch, Route } from 'react-router';
import Analytics from '../../components/AdminPanel/Analytics/Analytics';
import Sells from '../../components/AdminPanel/Sells/Sells';
import "./Dashboard.css";
import { createContext } from 'react';
import Goods from '../../components/AdminPanel/Goods/Goods';
import AddGood from '../../components/AdminPanel/Goods/AddGood/AddGood';
import GoodItem from '../../components/AdminPanel/Goods/GoodItem/GoodItem';

export const DashBoardContext=createContext();

const Dashboard = ({history}) => {
    const [show,setShow]=useState(false);

    return (
        <div className="dashboard">
            <DashBoardContext.Provider value={{
                history,
                show,
                setShow
            }}>
            <Sidebar />
            <DashMain>
                <Switch>
                    <Route exact path="/dashboard/analytics" component={Analytics} />
                    <Route exact path="/dashboard/sells" component={Sells} />
                    <Route exact path="/dashboard/goods" component={Goods} />
                    <Route exact path="/dashboard/goods/add-good" component={AddGood} />
                    <Route exact path="/dashboard/goods/:id" component={GoodItem} />
                </Switch>
            </DashMain>
            </DashBoardContext.Provider>
        </div>
    );
}

export default Dashboard;
