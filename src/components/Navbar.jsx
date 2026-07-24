import { useState } from "react";
import "./Navbar.css";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <button
        className="vv-btn"
        onClick={() => setOpen(!open)}
      >
        VV
      </button>

      <a href="/cart" className="cart-btn">
      <FiShoppingBag />
      </a>

      {open && (
        <div className="dropdown">
          <a href="/">HOME</a>
          <a href="/collection">NEW ARRIVALS</a>
          <a href="/collection">BOTTOMS</a>
          <a href="/collection">TOPS</a>
          <a href="/collection">DENIMS</a>
          <a href="/collection">INNER-WEAR</a>
          <a href="/About">ABOUT</a>
          <a href="/Contact">CONTACT</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;