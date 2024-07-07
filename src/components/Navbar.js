import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/experiment">EXPERIMENT</Link></li>
        <li><Link to="/story">STORY</Link></li>
        <li><Link to="/art">ART</Link></li>
        <li><Link to="/science">SCIENCE</Link></li>
        <li><Link to="/philosophy">PHILOSOPHY</Link></li>
        <li><Link to="/bookreview">BOOK REVIEW</Link></li>
        <li><Link to="/moviereview">MOVIE REVIEW</Link></li>
        <li><Link to="/clipreview">CLIP REVIEW</Link></li>
        <li><Link to="/personaldevelopment">PERSONAL DEVELOPMENT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
