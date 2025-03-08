import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './HomePage.module.css';
import { motion } from 'framer-motion';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div className={styles.homeContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <motion.input
          type="text"
          className={styles.searchBar}
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          whileFocus={{ scale: 1.05 }}
        />
      </div>
      
      {/* Product List */}
      <motion.div className={styles.productList} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div key={product.id} whileHover={{ scale: 1.03 }}>
              <Link to={`/product/${product.id}`} className={styles.productLink}>
                <ProductCard product={product} />
              </Link>
            </motion.div>
          ))
        ) : (
          <p className={styles.noResults}>No products found.</p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default HomePage;