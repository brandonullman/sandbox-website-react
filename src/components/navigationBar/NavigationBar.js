import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = (props) => {

    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(expand => !expand);
    };

    return (
        <div>
            <nav>
                <div className={ !expand ? 'navigationBar' : 'navigationBar expanded' }> 
                    <div className="nav-bar-name">
                        <Link to='/'><h1 id="nav-brandon">Brandon's</h1></Link>
                        <Link to='/'><h1 id="nav-sandbox">Sandbox</h1></Link>
                    </div>
                    <ul className={ !expand ? 'nav-buttons' : 'nav-buttons expanded' }>
                        <li className={`nav-button ${props.location.pathname === '/' ? 'active' : ''}`} ><Link to='/'>Home</Link></li>
                        <li className={`nav-button ${props.location.pathname === '/about' ? 'active' : ''}`} ><Link to='/about'>About</Link></li>
                        <li className={`nav-button ${props.location.pathname === '/widgets' ? 'active' : ''}`} ><Link to='/widgets'>Widgets</Link></li>
                        <li className={`nav-button ${props.location.pathname === '/contact' ? 'active' : ''}`} ><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div onClick={handleClick} className="nav-expand-container">
                        <div id="nav-expand-1" className="nav-expand"></div>
                        <div id="nav-expand-2" className={ !expand ? 'nav-expand' : 'nav-expand expanded' }></div>
                        <div id="nav-expand-3" className="nav-expand"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default withRouter(NavigationBar);