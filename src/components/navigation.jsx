import React from "react";
import { navItems } from "../utils/constants.js";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="fixed-top ms-5 mt-2">
            <ul className="nav">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.title}>
                        <NavLink
                            to={item.route}
                            className={({ isActive }) =>
                                "btn btn-danger mx-1" + (isActive ? " active" : "")
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
