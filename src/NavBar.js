import React from 'react';
import logo from './logo.svg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Bootstrap
            </a>
            <button type="button" className="btn btn-primary">Primary</button>
        </nav>
    )
}

export default NavBar;