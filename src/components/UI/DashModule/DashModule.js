import React from 'react';
import "./DashModule.css";

const DashModule = ({children,title}) => {
    return (
        <div className="dashboard__module module">
            <div className="module__header">
                <h3 className="module__title">{title}</h3>
            </div>
            <div className="module__body">
                {children}
            </div>
        </div>
    );
}

export default DashModule;
