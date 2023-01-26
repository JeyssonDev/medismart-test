import { useState } from 'react';
import GPT from '../../assets/gpt.svg';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={GPT} alt="logo" />
                </div>
                <div className="navbar-links_container">
                    <p>
                        <a href="#home">Home</a>
                    </p>
                    <p>
                        <a href="#w">What is GPT3x</a>
                    </p>
                    <p>
                        <a href="#possibility">Open AI</a>
                    </p>
                    <p>
                        <a href="#features">Case Studies</a>
                    </p>
                    <p>
                        <a href="#blog">Library</a>
                    </p>
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <p>
                                <a href="#home">Home</a>
                            </p>
                            <p>
                                <a href="#wgpt3">What is GPT3?</a>
                            </p>
                            <p>
                                <a href="#possibility">Open AI</a>
                            </p>
                            <p>
                                <a href="#features">Case Studies</a>
                            </p>
                            <p>
                                <a href="#blog">Library</a>
                            </p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
