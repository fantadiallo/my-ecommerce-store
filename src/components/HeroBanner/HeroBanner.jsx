import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroBanner.module.css";


function HeroBanner() {
    const navigate = useNavigate();
  
    return (
      <section className={styles.hero}>
        <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Walo.3</h1>
          <p className={styles.tagline}>Shop for the latest Web3 products</p>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.buttons}>
            <button className={styles.web3}>Web3</button>
            <button className={styles.shop} onClick={() => navigate('/shop')}>Shop</button>
            <button className={styles.news}>News</button>
          </div>
          </div>
          </div> 
      </section>
    );
  }
  
  export default HeroBanner;
  