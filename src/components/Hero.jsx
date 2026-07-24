import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const typedText = "V Y S E N   V E I L";
  const finalText = "VYSEN VEIL";

  const [text, setText] = useState("");
  const [merged, setMerged] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setText(typedText.slice(0, index + 1));

      index++;

      if (index === typedText.length) {
        clearInterval(timer);

        setTimeout(() => {
          setMerged(true);
          setText(finalText);

          setTimeout(() => {
            setShowContent(true);
          }, 500);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">

      <h1 className={`logo ${merged ? "merged" : ""}`}>
        {text}
      </h1>

      {showContent && (
        <div className="content fade-in">

          <p className="tagline">
            WHERE ELEGANCE BECOMES IDENTITY
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/collection")}
          >
            SHOP COLLECTION
          </button>

        </div>
      )}

    </section>
  );
}

export default Hero;