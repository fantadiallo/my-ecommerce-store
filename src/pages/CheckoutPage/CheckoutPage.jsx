import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import styles from "./CheckoutPage.module.css";
import { motion } from "framer-motion";

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  return (
    <motion.div className={styles.checkoutContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image.url} alt={item.image.alt} className={styles.cartItemImage} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>${item.discountedPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</h2>
          <motion.button className={styles.checkoutButton} onClick={handleCheckout} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Proceed to Payment
          </motion.button>
        </>
      )}
    </motion.div>
  );
}

export default CheckoutPage;