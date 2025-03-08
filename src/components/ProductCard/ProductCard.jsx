import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
      <img src={product.image.url} alt={product.image.alt} className={styles.productImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productPrice}>
          {product.discountedPrice < product.price ? (
            <>
              <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
              <span className={styles.newPrice}> ${product.discountedPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className={styles.newPrice}>${product.price.toFixed(2)}</span>
          )}
        </p>
        <p className={styles.productRating}>⭐ {product.rating} / 5</p>
        <Link to={`/product/${product.id}`} className={styles.viewButton}>View Product</Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
