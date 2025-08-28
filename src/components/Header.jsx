import React from 'react';
import Navigation from "./navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header>
            <Navigation/>
            <h1>Luke Skywalker</h1>
        </header>
    );
};

export default Header;