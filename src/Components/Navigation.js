import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props)=>{
    return (
        <nav className="nav  justify-content-center nav-pills nav-fill">
            <NavLink to={'/'} exact className="nav-link">Books</NavLink>
            <NavLink to={'/chats'} className="nav-link">Chats</NavLink>
        </nav>

    )
};
export default Navigation;