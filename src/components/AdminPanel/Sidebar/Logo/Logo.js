import React from 'react';
import styled from "styled-components";

const LogoTitle=styled.h3`
    padding: 2rem 0;
    font-family: "Norican",sans-serif;
    font-size: 2.3rem;
    text-align: center;
    color: white;
`;

const Logo = () => {
    return (
        <header className="dash-aside__header">
            <LogoTitle>
                <span className="logo_colored" style={{color:'#4fc1ee'}}>Dash</span>Board
            </LogoTitle>
        </header>
    );
}

export default Logo;
