import React from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          💅 <span>Fashion Store</span>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <ProductList />
        <Footer />
      </div>
    </>
  );
};

export default App;
