import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <motion.div className={styles.card} whileHover={{ scale: 1.03 }}>
      <img src={product.image.url} alt={product.image.alt} className={styles.productImage} />
      
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>{product.title}</h2>

      
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

        <p className={styles.productRating}>⭐ {product.rating} / 5</p>

       
        <Link to={`/product/${product.id}`} className={styles.viewButton}>
          View Product
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
