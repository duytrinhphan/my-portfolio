import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';

import './header.styles.css';
import logo from "../../assets/img/logo.png";

const Header = () => {
    const [showMenu, setShowMenu] = useState("nav__menu");

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav__logo">
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.01rem', color: '#004352' }}>
                        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        Phan Vo Duy Trinh
                    </a>
                </div>

                <div className={showMenu} id="nav-menu">
                    <Scrollspy
                        className="nav__list"
                        items={['home', 'about', 'skills', 'project', 'contact']}
                        currentClassName="nav__link active"
                        offset={-80} // tránh dính header khi scroll
                      >
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#project" className="nav__link">Project</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </Scrollspy>
                </div>

                <div
                    className="nav__toggle"
                    id="nav-toggle"
                    onClick={() => setShowMenu(showMenu === "nav__menu" ? "nav__menu show" : "nav__menu")}
                >
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
