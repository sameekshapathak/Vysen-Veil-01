import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5EFE6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#1F2A44", fontSize: "60px" }}>✓</h1>

      <h2 style={{ color: "#1F2A44" }}>
        Thank You For Your Order!
      </h2>

      <p>Your order has been placed successfully.</p>

      <button
        onClick={() => navigate("/collection")}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#1F2A44",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        CONTINUE SHOPPING
      </button>
    </div>
  );
}

export default OrderSuccess;