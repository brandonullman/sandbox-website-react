import React, { useState, useEffect } from 'react';
import './NavigationBar.css';

export const NavigationBar = () => {

        const [expand, setExpand] = useState(false);

        const handleClick = () => {
            setExpand(expand => !expand);
        };

    return (
        <div>
            <div className={ !expand ? 'navigationBar' : 'navigationBar expanded' }> 
                <div className="nav-bar-name">
                    <a href='index.html'><h1 id="nav-brandon">Brandon's</h1></a>
                    <a href='index.html'><h1 id="nav-sandbox">Sandbox</h1></a>
                </div>
                <ul className={ !expand ? 'nav-buttons' : 'nav-buttons expanded' }>
                    <li className="nav-button"><a href='index.html'>Home</a></li>
                    <li className="nav-button">About</li>
                    <li className="nav-button"><a href='widgets.html'>Widgets</a></li>
                    <li className="nav-button">Contact</li>
                </ul>
                <div onClick={handleClick} className="nav-expand-container">
                    <div id="nav-expand-1" className="nav-expand"></div>
                    <div id="nav-expand-2" className={ !expand ? 'nav-expand' : 'nav-expand expanded' }></div>
                    <div id="nav-expand-3" className="nav-expand"></div>
                </div>
            </div>
        </div>
    );
};