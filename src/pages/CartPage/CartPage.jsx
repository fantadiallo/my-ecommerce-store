import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import styles from './CartPage.module.css';
import { motion } from 'framer-motion';

function CartPage() {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <motion.div className={styles.cartContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className={styles.cartTitle}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image.url} alt={item.image.alt} className={styles.cartItemImage} />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>Price: ${item.discountedPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <h2 className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</h2>
          <Link to="/checkout">
            <motion.button className={styles.checkoutButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Proceed to Checkout
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default CartPage;