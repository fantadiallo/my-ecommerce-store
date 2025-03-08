import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from './pages/CartPage/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProductPage from './pages/ProductPage/ProductPage';
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <Layout> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

