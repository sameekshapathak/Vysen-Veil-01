import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Look1 from "../assets/images/Look1.jpg";
import "./product.css";

function Product() {

  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const handleCart = () => {

    if (!size) {
      alert("Please select a size");
      return;
    }

    if (!added) {

      setAdded(true);

    } else {

      navigate("/cart", {
        state: {
          image: Look1,
          name: "Ivory Corset Top",
          price: 2499,
          size: size,
          quantity: quantity,
        },
      });

    }
  };

  return (

    <div className="product-page">

      <img
        src={Look1}
        alt="Ivory Corset Top"
        className="product-image"
      />

      <div className="product-details">

        <h1>IVORY CORSET TOP</h1>

        <p className="price">₹2499</p>

        <p className="description">
          Elegant corset-inspired top designed for
          modern sophistication.
        </p>

        <h3 className="section-title">Size</h3>

        <div className="size-buttons">

          <button
            className={size === "XS" ? "selected" : ""}
            onClick={() => setSize("XS")}
          >
            XS
          </button>

          <button
            className={size === "S" ? "selected" : ""}
            onClick={() => setSize("S")}
          >
            S
          </button>

          <button
            className={size === "M" ? "selected" : ""}
            onClick={() => setSize("M")}
          >
            M
          </button>

          <button
            className={size === "L" ? "selected" : ""}
            onClick={() => setSize("L")}
          >
            L
          </button>

        </div>

        <div
          className="gift-button"
          onClick={() => {
            if (quantity < 5) {
              setQuantity(quantity + 1);
            }
          }}
        >
           Gift One Too
        </div>

        <p className="quantity-text">
          Quantity: {quantity}
        </p>

        <button
          className="add-cart"
          onClick={handleCart}
        >
          {added ? "VIEW CART →" : "ADD TO CART"}
        </button>

        <div className="product-info">

          <p>Fabric: Premium Cotton Blend</p>

          <p>Fit: Regular Fit</p>

          <p>Color: Ivory</p>

          <p>Made in India</p>

        </div>

      </div>

    </div>

  );
}

export default Product;