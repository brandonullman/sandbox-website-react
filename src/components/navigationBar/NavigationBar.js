import React from 'react';
import './NavigationBar.css';

export const NavigationBar = () => {
    return (
        <div className='navigationBar'> 
            <div className="nav-bar-name">
                <a href='index.html'><h1 id="nav-brandon">Brandon's</h1></a>
                <a href='index.html'><h1 id="nav-sandbox">Sandbox</h1></a>
            </div>
            <ul className="nav-buttons">
                <li className="nav-button"><a href='index.html'>Home</a></li>
                <li className="nav-button">About</li>
                <li className="nav-button"><a href='widgets.html'>Widgets</a></li>
                <li className="nav-button">Contact</li>
            </ul>
            <div className="nav-menu-button-container" onclick="menuButton(this)">
                <div id="nav-menu-button-1" className="nav-menu-button"></div>
                <div id="nav-menu-button-2" className="nav-menu-button"></div>
                <div id="nav-menu-button-3" className="nav-menu-button"></div>
            </div>
        </div>
    );
};