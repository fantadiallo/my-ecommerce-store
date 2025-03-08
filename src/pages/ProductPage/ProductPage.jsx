import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import styles from './ProductPage.module.css';
import { motion } from 'framer-motion';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <p className={styles.loading}>Loading...</p>;

  const discount = product.price - product.discountedPrice;

  return (
    <motion.div 
      className={styles.productContainer} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src={product.image.url} 
        alt={product.image.alt} 
        className={styles.productImage} 
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.4 }}
      />
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        {discount > 0 && <p className={styles.discount}>Discount: ${discount.toFixed(2)} off!</p>}
        <p className={styles.productPrice}>Price: ${product.discountedPrice.toFixed(2)}</p>
        <motion.button 
          className={styles.addToCartButton} 
          onClick={() => addToCart(product)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
        <div className={styles.reviewsSection}>
          <h3>Customer Reviews</h3>
          {product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <motion.div key={review.id} className={styles.review} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <p><strong>{review.username}</strong> ⭐ {review.rating} / 5</p>
                <p>{review.description}</p>
              </motion.div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductPage;
