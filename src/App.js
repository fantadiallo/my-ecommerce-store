import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage/CheckoutSuccessPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { CartProvider } from './context/CartContext'; // Import CartContext
import { FavoritesProvider } from './context/FavoritesContext'; // Import FavoritesContext
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <Layout isLoading={isLoading}>
            <Routes>
              <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
              <Route path="/product/:id" element={<ProductPage setIsLoading={setIsLoading} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
