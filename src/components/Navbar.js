import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">ANA SAYFA</Link></li>
        <li><Link to="/experiment">DENEME</Link></li>
        <li><Link to="/story">HİKAYE</Link></li>
        <li><Link to="/art">SANAT</Link></li>
        <li><Link to="/science">BİLİM</Link></li>
        <li><Link to="/philosophy">FELSEFE</Link></li>
        <li><Link to="/bookreview">KİTAP İNCELEME</Link></li>
        <li><Link to="/moviereview">DİZİ/FİLM İNCELEME</Link></li>
        <li><Link to="/clipreview">CLIP İNCELEME</Link></li>
        <li><Link to="/personaldevelopment">KİŞİSEL GELİŞİM</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
