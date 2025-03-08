import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>E-Shop</Link>

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            {/* Clicking Cart Icon opens the sidebar */}
            <button className={styles.cartIcon} onClick={() => setCartOpen(true)}>
              🛒 <span className={styles.cartCount}>{cartItems.length}</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Side Cart Menu */}
      <div className={`${styles.cartSidebar} ${cartOpen ? styles.showCart : ""}`}>
        <button className={styles.closeCart} onClick={() => setCartOpen(false)}>✖</button>
        <h2>Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.discountedPrice}
                </li>
              ))}
            </ul>
            <p className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/cart" onClick={() => setCartOpen(false)}>
              <button className={styles.viewCartButton}>View Cart</button>
            </Link>
            <Link to="/checkout" onClick={() => setCartOpen(false)}>
              <button className={styles.checkoutButton}>Checkout</button>
            </Link>
          </>
        ) : (
          <p className={styles.emptyCart}>Cart is empty</p>
        )}
      </div>

      {/* Background Overlay when cart is open */}
      {cartOpen && <div className={styles.cartOverlay} onClick={() => setCartOpen(false)}></div>}
    </header>
  );
}

export default Header;
