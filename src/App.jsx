import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Collection from "./pages/collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import OrderSuccess from "./pages/ordersuccess";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderSuccess />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;