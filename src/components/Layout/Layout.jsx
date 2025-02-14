import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop';
import Sidebar from '../Sidebar/Sidebar';
import Spinner from '../Spinner/Spinner';
import styles from './Layout.module.css';

const Layout = ({ children, isLoading }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <ScrollToTop />
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={styles.main}>
          {children}
        </main>
      )}
      <Footer>
        <nav className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </Footer>
    </div>
  );
};

export default Layout;