import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
        <Link to="/">
            <h3>Logo</h3>
        </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="/users">
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
