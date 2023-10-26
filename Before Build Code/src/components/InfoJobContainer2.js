import p1 from "../assets/logos/scoot.svg";
import p2 from "../assets/logos/blogr.svg";
import p3 from "../assets/logos/vector.svg";
import p4 from "../assets/logos/officelite.svg";
import p5 from "../assets/logos/pod.svg";
import p6 from "../assets/logos/creative.svg";
import p7 from "../assets/logos/pomodoro.svg";
import p8 from "../assets/logos/maker.svg";
import p9 from "../assets/logos/coffeeroasters.svg";
import p10 from "../assets/logos/mastercraft.svg";
import p11 from "../assets/logos/crowdfund.svg";
import p12 from "../assets/logos/typemaster.svg";
import p13 from "../assets/logos/crowdfund.svg";
import p14 from "../assets/logos/coffeeroasters.svg";
import p15 from "../assets/logos/blogr.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function InfoJobContainer2({ elemento, id }) {
  const [hover, setHover] = useState(false);
  const { darkMode } = useDevJobsContext();
  // console.log(elemento);
  const backgroundColors = [
    "#E99210",
    "#E54D25",
    "#34353F",
    "#2F4FC7",
    "#132034",
    "#4E1853",
    "#4722C6",
    "#21427D",
    "#F2DECB",
    "#1F1F1F",
    "#37C790",
    "#F16718",
    "#37C790",
    "#F2DECB",
    "#E54D25",
  ];
  const arrImg = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
  ];

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
      to="/description2"
      state={{
        elemento,
        background: backgroundColors[id - 1],
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
        <img
          style={{ backgroundColor: backgroundColors[id - 1] }}
          className="img-logo"
          alt=""
          src={arrImg[id - 1]}
        />
        <div className="main-info">
          <div className="top-info">
            <p className="years">{elemento.postedAt}</p>
            <p className="point">.</p>
            <p className="full-time">{elemento.contract}</p>
          </div>

          <p className="job" style={darkMode ? { color: "white" } : {}}>
            {elemento.position}
          </p>

          <p className="company">{elemento.company}</p>
        </div>

        <p className="country">{elemento.location}</p>
      </div>
    </Link>
  );
}
