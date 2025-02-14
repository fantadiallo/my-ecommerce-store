import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import FavoritesIcon from '../FavoritesIcon/FavoritesIcon';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>WaloWeb</Link>

      {/* Hamburger Menu Button for Mobile */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links with Search after Contacts */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><SearchBar /></li>
          <li><Link to="/favorites"><FavoritesIcon /></Link></li>
          <li><Link to="/cart"><CartIcon /></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
