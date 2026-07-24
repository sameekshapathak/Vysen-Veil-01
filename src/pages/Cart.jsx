import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Cart() {

  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return (
      <div style={{ padding: "100px" }}>
        <h1>SHOPPING CART</h1>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5EFE6",
        padding: "80px 50px"
      }}
    >
      <h1
        style={{
          color: "#1F2A44",
          marginBottom: "40px"
        }}
      >
        SHOPPING CART
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          display: "flex",
          gap: "30px",
          maxWidth: "900px"
        }}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "250px",
            borderRadius: "12px"
          }}
        />

        <div>

          <h2>{product.name}</h2>

          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>

          <p>
            <strong>Size:</strong> {product.size}
          </p>

          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>

          <h3
            style={{
              color: "#1F2A44",
              marginTop: "20px"
            }}
          >
            Total: ₹{product.price * product.quantity}
          </h3>

          <button
  onClick={() => navigate("/checkout")}
  style={{
    marginTop: "20px",
    padding: "12px 24px",
    background: "#1F2A44",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  }}
>
  PROCEED TO CHECKOUT
</button>

        </div>

      </div>

    </div>
  );
}

export default Cart;