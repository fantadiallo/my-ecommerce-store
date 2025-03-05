import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartDrawer.module.css";

const CartDrawer = ({ isOpen, closeCartSidebar, sidebarType }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Checkout successful! 🎉");
    clearCart();
    closeCartSidebar();
  };

  return (
    <div className={`${styles.cartDrawer} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={closeCartSidebar}>✖</button>
      <h3>{sidebarType === "cart" ? "Your Cart" : "Favorites"}</h3>

      {sidebarType === "cart" && cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : sidebarType === "favorites" ? (
        <p className={styles.emptyMessage}>Your favorites list is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.cartImage} />
              <div className={styles.cartDetails}>
                <p>{item.title}</p>
                <p>${item.price.toFixed(2)}</p>
                <div className={styles.quantity}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {sidebarType === "cart" && cartItems.length > 0 && (
        <div className={styles.cartFooter}>
          <p>Total: ${cartTotal.toFixed(2)}</p>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
