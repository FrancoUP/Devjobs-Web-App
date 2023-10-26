import { Link } from "react-router-dom";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function InfoJobContainer1({ elemento, index }) {
  const [hover, setHover] = useState(false);
  const { darkMode } = useDevJobsContext();
  // console.log(elemento);

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      to="/description1"
      state={{
        elemento,
      }}
      style={{ textDecoration: "none" }}
    >
      <div
        className="container-job"
        onClick={scrollToTop}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onTouchStart={handleMouseOver}
        onTouchEnd={handleMouseOut}
        style={
          hover
            ? {
                boxShadow: !darkMode
                  ? "0 10px 10px rgba(76, 97, 135, 0.1)"
                  : "0 10px 10px rgba(255, 255, 244, 0.2)",
                backgroundColor: darkMode ? "#19202D" : "white",
              }
            : { backgroundColor: darkMode ? "#19202D" : "white" }
        }
      >
        <div className="img-logo2"></div>
        <div className="main-info">
          <div className="top-info">
            <p className="years">1dy/ago</p>
            <p className="point">.</p>
            <p className="full-time">{elemento.contract_time || ""}</p>
          </div>

          <p className="job" style={darkMode ? { color: "white" } : {}}>
            {elemento.title || ""}
          </p>

          <p className="company">{elemento.company?.display_name || ""}</p>
        </div>

        <p className="country">{elemento.location?.area[0] || ""}</p>
      </div>
    </Link>
  );
}
