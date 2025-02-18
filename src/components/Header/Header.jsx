import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import FavoritesIcon from '../FavoritesIcon/FavoritesIcon';
import styles from './Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <p>Welcome to our Online Store</p>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        {/* Hamburger Menu (mobile only) */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Center Logo */}
        <div className={styles.centerContent}>
          <Link to="/" className={styles.logo}>Logo</Link>

          {/* Navigation Links (desktop only) */}
          <nav className={styles.navLinks}>
            <Link to="/home">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className={styles.rightIcons}>
          <FavoritesIcon />
          <CartIcon onClick={toggleCart} itemCount={3} />
        </div>
      </header>

      {/* Collapsible Navigation Menu (mobile only) */}
      <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/store" onClick={() => setMenuOpen(false)}>Store</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      {/* Side Cart Popup */}
      {isCartOpen && (
        <div className={styles.sideCart}>
          <button onClick={toggleCart} className={styles.closeCart}>✖</button>
          <h3>Your Cart</h3>
          <p>Cart content will go here...</p>
        </div>
      )}
    </div>
  );
}

export default Header;
