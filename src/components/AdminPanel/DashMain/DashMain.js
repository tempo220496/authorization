import React from 'react';
import DashHeader from '../DashHeader/DashHeader';
import { useContext } from 'react';
import { DashBoardContext } from '../../../containers/Dashboard/Dashboard';

const DashMain = ({children}) => {
    const {show,setShow}=useContext(DashBoardContext);
    return (
        <div className={['dash-main',show ? "dash-main_disabled":''].join(' ')} onClick={()=>show ? setShow(false):null }>
            <DashHeader />
            <div className="dashboard-info">
                {children}
            </div>
        </div>
    );
}

export default DashMain;
