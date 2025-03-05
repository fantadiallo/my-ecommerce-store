import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartIcon.module.css";

const CartIcon = ({ openCartSidebar }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <button className={styles.cartIcon} onClick={openCartSidebar}>
      🛒 {cartCount > 0 && <span className={styles.itemCount}>{cartCount}</span>}
    </button>
  );
};

export default CartIcon;
