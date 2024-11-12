import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState(0);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <nav>
        <div className="logo-container">
            <div className="logo">
            <img src={logo} alt="web-logo" />
            <h3>Study Link</h3>
            </div>
            <ul>
            <li
                className={active === 0 ? "active" : ""}
                onClick={() => handleClick(0)}
            >
                <Link to="hero" smooth={true} offset={0} duration={500} aria-current={active === 0 ? 'page' : undefined}>
                Home
                </Link>
            </li>
            <li
                className={active === 1 ? "active" : ""}
                onClick={() => handleClick(1)}
            >
                <Link to="program" smooth={true} offset={0} duration={500} aria-current={active === 1 ? 'page' : undefined}>
                Program
                </Link>
            </li>
            <li
                className={active === 2 ? "active" : ""}
                onClick={() => handleClick(2)}
            >
                    <Link to="about" smooth={true} offset={0} duration={500} aria-current={active === 3 ? 'page' : undefined}>
                About
                </Link>
            </li>
            <li
                className={active === 3 ? "active" : ""}
                onClick={() => handleClick(3)}
            >
                <Link to="testimonials" smooth={true} offset={0} duration={500} aria-current={active === 2 ? 'page' : undefined}>
                Testimonials
                </Link>
            </li>
            <li>
                <button>
                <Link to="contact" smooth={true} offset={0} duration={500}>
                    Contact Us
                </Link>
                </button>
            </li>
            </ul>
            {/* <div className="btn">
            <button>
                <Link to="signin" smooth={true} offset={0} duration={500}>
                Sign In
                </Link>
            </button>
            <button>
                <Link to="signup" smooth={true} offset={0} duration={500}>
                Sign Up
                </Link>
            </button>
            </div> */}
        </div>
        </nav>
    );
};

export default Navbar;
