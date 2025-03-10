import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./CheckoutSuccessPage.module.css";
import { motion } from "framer-motion";

function CheckoutSuccessPage() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    if (clearCart) {
      clearCart(); // ✅ This will clear the cart after checkout
    }
  }, [clearCart]);

  return (
    <motion.div 
      className={styles.successContainer} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.successMessage}>🎉 Order Successful!</h1>
      <p className={styles.successText}>Thank you for shopping with us. Your order has been placed successfully.</p>
      <Link to="/" className={styles.backToStore}>
        <motion.button 
          className={styles.backButton} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Continue Shopping
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default CheckoutSuccessPage;
