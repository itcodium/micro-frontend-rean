import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/home" style={styles.link}>Home</Link>
      <Link to="/react" style={styles.link}>React App</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/test" style={styles.link}>Test</Link>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
  },
};

export default Navbar;