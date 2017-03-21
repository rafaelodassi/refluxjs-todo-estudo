import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ComponentHome from './common/componentHome.jsx';
import ComponentAbout from './common/componentAbout.jsx';
import ComponentGames from './games/ComponentGames.jsx';

render(
    <Router>
        <div>            
            <nav className="nav-menu">
                <div className="container nav-wrapper">
                    <a href="/" className="brand-logo">Plataforma de Games</a>                    
                    
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/games"><i className="material-icons left">games</i>Listagem de Games</Link></li>                        
                        <li><Link to="/about"><i className="material-icons left">info_outline</i>Sobre o estudo</Link></li>
                    </ul>
                </div>
            </nav>            

            <Route exact path="/" component={ComponentHome}/>            
            <Route path="/games" component={ComponentGames}/>
            <Route path="/about" component={ComponentAbout}/>
        </div>
    </Router>,
    document.getElementById('container')
);