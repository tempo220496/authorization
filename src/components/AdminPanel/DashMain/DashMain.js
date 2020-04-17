import React from 'react';
import DashHeader from '../DashHeader/DashHeader';

const DashMain = ({children,history}) => {
    return (
        <div className="dash-main">
            <DashHeader history={history} />
            <div className="dashboard-info">
                {children}
            </div>
        </div>
    );
}

export default DashMain;
