import "./App.css";
import "./shop.css";
import "./productDetails.css";
import "./cart.css";
import "./searchedProduct.css";
import "./login.css";
import "./button.css";
import "./orders.css";
import "./modal.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponent/Header";
import Products from "./components/ProductsComponent/Products";
import Footer from "./components/FooterComponent/Footer";
import Buttons from "./components/FooterComponent/Buttons";
import ProductDetails from "./components/ProductsComponent/ProductDetails";
import Cart from "./components/CartComponent/Cart";
import SearchedProduct from "./components/ProductsComponent/SearchedProduct";
import Login from "./components/Users/Login";
import SignUp from "./components/Users/SignUp";
import MyAccount from "./components/OrderComponent/MyAccount";
export default function App() {
  return (
    <Router>
      <div className="grid-container noselect">
        <Header />
        <main className="main-content noselect">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/shop" element={<ProductDetails />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<SearchedProduct />} />
            <Route path="/search" element={<SearchedProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myaccount" element={<MyAccount />} />
          </Routes>
        </main>
        <Buttons />
        <Footer />
      </div>
    </Router>
  );
}
