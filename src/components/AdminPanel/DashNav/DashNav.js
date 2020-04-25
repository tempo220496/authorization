import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import "./DashNav.css";
import { motion } from 'framer-motion';

const links=[
    {title:'Analytics',path:"/dashboard/analytics",icon:'chart line',id:1},
    {title:'Sells',path:"/dashboard/sells",icon:'chart bar',id:2},
    {title:'Goods',path:"/dashboard/goods",icon:'briefcase',id:3}
];
const NavVariants={
    open:{
        x:0,
        transition:{
            when:'beforeChildren',
            staggerChildren:0.2
        }
    },
    closed:{
        x:-300
    }
};

const LinkVariants={
    open:{y:0,opacity:1},
    closed:{y:-20,opacity:0}
};

const DashNav = ({show}) => {
    return (
        <motion.nav 
        className="dash-nav"
        variants={NavVariants}
        initial="closed"
        animate={show ? "open":"closed"}
        >
            {links.map(link=>{
                return(
                    <motion.div key={link.id} variants={LinkVariants}>
                        <NavLink exact to={link.path} className="dash-nav__link">
                            <Icon name={link.icon} size="large" className="dash-nav__link-icon" />
                            <span className="dash-nav__link-text">{link.title}</span>
                        </NavLink>
                    </motion.div>
                )
            })}
        </motion.nav>
    );
}

export default DashNav;
