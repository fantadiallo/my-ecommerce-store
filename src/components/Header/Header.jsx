import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>Online-store</Link>

        {/* Cart Icon - Always Visible */}
        <CartIcon />

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
