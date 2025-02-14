import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext'; // Import cart context
import styles from './CartIcon.module.css';

function CartIcon({ openCartSidebar }) {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <div className={styles.cartIcon}>
      <button 
        type="button"
        className={styles.cartButton} 
        aria-label="View Cart"
        onClick={() => openCartSidebar()} // Trigger side cart
      >
        <FaShoppingCart size={20} />
        {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
      </button>
    </div>
  );
}

export default CartIcon;
