import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EduMint
        </Link>
        <div className="nav-menu">
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/achievements" className="nav-link">Achievements</Link>
          <Link to="/rewards" className="nav-link">Rewards</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;