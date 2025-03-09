import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./CartIcon.module.css";
import { motion } from "framer-motion";

function CartIcon() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cartIconContainer}>
      {/* Cart Button */}
      <motion.button 
        className={styles.cartButton} 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🛒 
        <span className={styles.cartCount}>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
      </motion.button>

      {/* Cart Dropdown */}
      {isOpen && (
        <motion.div 
          className={styles.cartDropdown} 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button className={styles.closeCartButton} onClick={() => setIsOpen(false)}>
            ✖
          </button>

          {cartItems.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image.url} alt={item.image.alt} className={styles.cartItemImage} />
                  <div className={styles.itemDetails}>
                    <p>{item.title}</p>
                    <p>${item.discountedPrice.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p> {/* ✅ Shows quantity instead of duplicate */}
                  </div>
                </div>
              ))}
              <Link to="/cart" className={styles.viewCartLink} onClick={() => setIsOpen(false)}>
                <button className={styles.viewCartButton}>View Cart</button>
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default CartIcon;
