import React from 'react';
import { navItems } from "../utils/constants.jsx";
import NavItem from "./NavItem.jsx";

const Navigation = () => {
    return (
        <nav className="fixed-top ms-5 mt-2">
            <ul className="nav">
                {navItems.map(item =>
                    <NavItem key={item.title} item={item}/>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
