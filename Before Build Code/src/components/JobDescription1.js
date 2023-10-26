import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function JobDescription1() {
  const { state } = useLocation();
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const { darkMode } = useDevJobsContext();
  // console.log(state.elemento);

  function handleMouseOver1() {
    setHover1(true);
  }

  function handleMouseOut1() {
    setHover1(false);
  }

  function handleMouseOver2() {
    setHover2(true);
  }

  function handleMouseOut2() {
    setHover2(false);
  }

  function handleMouseOver3() {
    setHover3(true);
  }

  function handleMouseOut3() {
    setHover3(false);
  }

  return (
    <div className="contauner-job-description">
      <div
        className="header-job-description"
        style={{ backgroundColor: darkMode ? "#19202D" : "white" }}
      >
        <div className="header-job-description-left">
          <div className="box-img-logo-company">
            <img className="img-logo-company" alt="" />
          </div>

          <div className="job-name-container">
            <p
              className="name-comp"
              style={{ color: darkMode ? "white" : "#19202D" }}
            >
              {state.elemento.company.display_name || ""}
            </p>
          </div>
        </div>

        <a href={state.elemento.redirect_url} rel="noreferrer" target="_blank">
          <button
            className="btn-company-site"
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
            onTouchStart={handleMouseOver1}
            onTouchEnd={handleMouseOut1}
            style={{
              backgroundColor: hover1 ? "#b5d0eb" : "#e2ebf2",
            }}
          >
            Company Site
          </button>
        </a>
      </div>
      <main
        className="main-container-information"
        style={{ backgroundColor: darkMode ? "#19202D" : "white" }}
      >
        <div className="header-job-descripton">
          <div className="a">
            <div className="b">
              <p className="b1">1 dy ago</p>
              <p className="b2">.</p>
              <p className="b3">{state.elemento.contract_type || ""}</p>
            </div>
            <p className="a2" style={{ color: darkMode ? "white" : "#19202D" }}>
              {state.elemento.category.label || ""}
            </p>
            <p className="a3">{state.elemento.location?.area[0] || ""}</p>
          </div>
          <a
            href={state.elemento.redirect_url}
            rel="noreferrer"
            target="_blank"
          >
            <button
              className="btn-applay"
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
              onTouchStart={handleMouseOver2}
              onTouchEnd={handleMouseOut2}
              style={{
                backgroundColor: hover2 ? "#939BF4" : "#5964E0",
              }}
            >
              Apply Now
            </button>
          </a>
        </div>

        <div
          className="requirements"
          style={{ color: darkMode ? "white" : "#19202D" }}
        >
          Description
        </div>

        <div className="requirements-description">
          {state.elemento.description}
        </div>
      </main>
      <div
        className="footer-container"
        style={{ backgroundColor: darkMode ? "#19202D" : "white" }}
      >
        {window.innerWidth > 600 && (
          <div className="c">
            <p className="c1" style={{ color: darkMode ? "white" : "#19202D" }}>
              {state.elemento.category.label || ""}
            </p>
            <p className="c2">{state.elemento.company.display_name || ""}</p>
          </div>
        )}
        <a href={state.elemento.redirect_url} rel="noreferrer" target="_blank">
          <button
            className="btn-applay"
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
            onTouchStart={handleMouseOver3}
            onTouchEnd={handleMouseOut3}
            style={{
              backgroundColor: hover3 ? "#939BF4" : "#5964E0",
            }}
          >
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}
