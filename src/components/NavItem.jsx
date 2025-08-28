import React from 'react';
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
    return (
        <li>
            <Link
                to={item.route}
                className="nav-item btn btn-danger mx-1"
            >
                {item.title}
            </Link>
        </li>
    );
};

export default NavItem;
