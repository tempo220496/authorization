import React, { useContext } from 'react';
import DashNav from '../DashNav/DashNav';
import { DashBoardContext } from '../../../containers/Dashboard/Dashboard';
import Logo from './Logo/Logo';
import {motion,AnimatePresence} from "framer-motion";

import "./Sidebar.css";

const Sidebar = () => {
    const {show}=useContext(DashBoardContext);
    return (
        <AnimatePresence>
            {show && (
                <motion.aside 
                    initial={{width: 0}}
                    animate={{width: 300}}
                    exit={{width: 0}}
                    className="dash-sidebar" 
                >
                    <Logo />
                    <DashNav show={show} />
                </motion.aside>
            )}
        </AnimatePresence>
    );
}

export default Sidebar;
