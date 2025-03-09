import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
      <img src={product.image.url} alt={product.image.alt} className={styles.productImage} />
      
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        
        {/* Price Display with Old Price and Discounted Price */}
        <p className={styles.productPrice}>
          {product.discountedPrice < product.price ? (
            <>
              <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
              <span className={styles.newPrice}> ${product.discountedPrice.toFixed(2)}</span>
            </>
          ) : (
            <span>${product.price.toFixed(2)}</span>
          )}
        </p>

        {/* Rating */}
        <p className={styles.productRating}>⭐ {product.rating} / 5</p>

        {/* Quantity Selector */}
        <div className={styles.quantityContainer}>
          <button onClick={decreaseQuantity} className={styles.quantityButton}>-</button>
          <span className={styles.quantity}>{quantity}</span>
          <button onClick={increaseQuantity} className={styles.quantityButton}>+</button>
        </div>

        {/* View Product Button */}
        <Link to={`/product/${product.id}`} className={styles.viewButton}>
          View Product
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
