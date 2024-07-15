import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Menu icon represented by 3 lines */}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">ANA SAYFA</Link></li>
        <li><Link to="/experiment">DENEME</Link></li>
        <li><Link to="/story">HİKAYE</Link></li>
        <li><Link to="/art">SANAT</Link></li>
        <li><Link to="/science">BİLİM</Link></li>
        <li><Link to="/philosophy">FELSEFE</Link></li>
        <li><Link to="/bookreview">KİTAP İNCELEME</Link></li>
        <li><Link to="/moviereview">DİZİ/FİLM İNCELEME</Link></li>
        <li><Link to="/clipreview">KLİP İNCELEME</Link></li>
        <li><Link to="/personaldevelopment">KİŞİSEL GELİŞİM</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
