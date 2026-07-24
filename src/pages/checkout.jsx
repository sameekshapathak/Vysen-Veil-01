import { useNavigate } from "react-router-dom";
function Checkout() {
    const navigate = useNavigate();
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F5EFE6",
          padding: "100px 50px"
        }}
      >
        <h1
          style={{
            color: "#1F2A44"
          }}
        >
          CHECKOUT
        </h1>
  
        <br />
  
        <input
          type="text"
          placeholder="Full Name"
        />
  
        <br /><br />
  
        <input
          type="email"
          placeholder="Email"
        />
  
        <br /><br />
  
        <input
          type="text"
          placeholder="Phone Number"
        />
  
        <br /><br />
  
        <textarea
          placeholder="Address"
          rows="5"
        />
  
        <br /><br />
  
        <button
      onClick={() => navigate("/success")}
      >
      PLACE ORDER
      </button>
      </div>
    );
  }
  
  export default Checkout;