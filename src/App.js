import React from 'react';
import NavBar from './NavBar.js';
import './App.css';

const App = () => {
  return (
    <div>
        <NavBar />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
    </div>
  );
}


export default App;
