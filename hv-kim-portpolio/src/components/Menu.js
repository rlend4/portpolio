import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <NavLink exact className="menu-item" activeClassName="menu-item-acitve" to="/">Home</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-acitve" to="/exp">Experience</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-acitve" to="/pro">Projects</NavLink>
            <NavLink className="menu-item" activeClassName="menu-item-acitve" to="/enj/chat">Enjoy</NavLink>
        </div>
    );
};

export default Menu;