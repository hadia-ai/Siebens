import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from './logo.svg';
import Jumbotron from './Jumbotron';

const NavBar = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const signOut = () => {
        setGlobalState(
            {
                ...globalState,
                signedIn: false
            }
        );

        localStorage.clear();
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Bootstrap
            </Link>

            <div style={{display: 'flex'}}>
                {
                    globalState.signedIn === false && 
                    <Link
                    to="/signin"
                    className="btn btn-primary">
                        Sign In
                    </Link>
                }

                {
                    globalState.signedIn === true && 
                    <button onClick={signOut}
                    className="btn btn-primary">
                        Sign Out
                    </button>
                }
            </div>
        </nav>
    )
}

export default NavBar;