import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard'; // ✅ Import ProductCard
import styles from './HomePage.module.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data.slice(0, 30));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.homeContainer}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />

      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <motion.div 
          className={styles.productList} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} /> // ✅ Use ProductCard component
            ))
          ) : (
            <p className={styles.noResults}>No products found.</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default HomePage;
