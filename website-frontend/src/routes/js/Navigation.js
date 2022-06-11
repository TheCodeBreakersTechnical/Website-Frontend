import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <div className="navigation">
            <div className="container">
                <span className="sl">
                    <span className="signup">
                        <Link to="register"> Sign Up </Link>
                    </span>
                    <span className="login">
                        <Link to="login"> Log In </Link>
                    </span>
                </span>
                <h1>The CodeBreakers</h1>
                <div>
                    <img onClick={toggleNav} src="Burger.png" alt="Menu-icon" className="menu"/>
                    <div className={isOpen? "ol on" : "ol off"}>
                        <ul>
                            <li>
                                <Link to="/" onClick={toggleNav}> Home </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={toggleNav}> Articles </Link>
                            </li>
                            <li>
                                <Link to="/achievements" onClick={toggleNav}> Achievements </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={toggleNav}> IDE </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={toggleNav}> About Us </Link>
                            </li>
                            <li>
                                <Link to="/events" onClick={toggleNav}> Events </Link>
                            </li>
                            {/* <li>Home</li>
                            <li>Articles</li>
                            <li>Achievements</li>
                            <li>IDE</li>
                            <li>About Us</li> */}
                        </ul>
                        <div className='closex' onClick={toggleNav}>
                            X
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}