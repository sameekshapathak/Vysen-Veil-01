import "./collection.css";
import Navbar from "../components/Navbar";
import hero from "../assets/images/hero.jpg";
import look1 from "../assets/images/Look1.jpg";
import look2 from "../assets/images/Look2.jpg";
import banner from "../assets/images/Banner.jpg";

function Collection() {
  return (
    <>
      <Navbar />

      <section className="hero-image">
        <img
          src={hero}
          alt="Hero"
          className="full-image"
        />

        <div className="overlay">
          <h1>VYSEN VEIL</h1>
          <p>SPRING COLLECTION</p>
        </div>
      </section>

      <section className="products-section">

      <div className="category-bar">
  <button>ALL</button>
  <button>TOPS</button>
  <button>BOTTOMS</button>
  <button>DENIMS</button>
  <button>INNERWEAR</button>
</div>

        <div className="products-grid">

          <div className="product-card">
            <img src={look1} alt="Product" />
            <h3>Ivory Corset Top</h3>
            <p>₹2499</p>
            <a href="/product">
            <button>VIEW PRODUCT</button>
            </a>   
           </div>

          <div className="product-card">
            <img src={look2} alt="Product" />
            <h3>Summer Dress</h3>
            <p>₹2999</p>
            <button>VIEW PRODUCT</button>
          </div>

          <div className="product-card">
            <img src={banner} alt="Product" />
            <h3>Linen Set</h3>
            <p>₹3499</p>
            <button>VIEW PRODUCT</button>
          </div>

        </div>

      </section>

    </>
  );
}

export default Collection;