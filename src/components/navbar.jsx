import { React, useState } from "react";
import logo from "/images/logo.png";
import Menu from "/images/menu.svg";
import Close from "/images/close.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Overlay - click to close menu */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />

        <button className="hamburger" onClick={toggleMenu}>
          <img src={isMenuOpen ? Close : Menu} alt="Menu" />
        </button>

        <div className={`link-container ${isMenuOpen ? 'active' : ''}`}>
          <nav>
            <a href="#" className="nav a.active" onClick={closeMenu}>Home</a>
            <a href="#" onClick={closeMenu}>Journey</a>
            <a href="#" onClick={closeMenu}>Project</a>
            <a href="#" onClick={closeMenu}>Resume</a>
          </nav>
        </div>
      </div>
    </>
  );
}