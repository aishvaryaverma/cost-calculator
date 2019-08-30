import React from 'react';

// Statics
import { ReactComponent as Logo } from '../../static/img/clavax-logo-red.svg';

const Header = () => {
    return (
        <header className="mainHeader">
            <div className="container">
                <div className="logo">
                    <a href="https://www.clavax.com/"><Logo height="35" /></a>
                </div>
                <nav className="mainNav">
                    <ul>
                        <li><a href="https://www.clavax.com/services">Services</a></li>
                        <li><a href="https://www.clavax.com/services">Latest Thinking</a></li>
                        <li><a href="https://www.clavax.com/services">Solution</a></li>
                        <li><a href="https://www.clavax.com/services">Portfolio</a></li>
                        <li><a href="https://www.clavax.com/services">Discover Clavax</a></li>
                        <li><a className="btnAnimated" href="https://www.clavax.com/services">Get an Estimate</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
