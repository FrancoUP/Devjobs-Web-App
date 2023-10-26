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
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function JobDescription2() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const { darkMode } = useDevJobsContext();
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
  const { state } = useLocation();

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
          <div
            className="box-img-logo-company"
            style={{ backgroundColor: state.background }}
          >
            <img
              className="img-logo-company"
              src={arrImg[state.elemento.id - 1]}
              alt=""
            />
          </div>

          <div className="job-name-container">
            <p
              className="name-comp"
              style={{ color: darkMode ? "white" : "#19202D" }}
            >
              {state.elemento.company}
            </p>
            <p className="site-comp">{state.elemento.website}</p>
          </div>
        </div>

        <a href={state.elemento.website} rel="noreferrer" target="_blank">
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
              <p className="b1">{state.elemento.postedAt}</p>
              <p className="b2">.</p>
              <p className="b3">{state.elemento.contract}</p>
            </div>
            <p className="a2" style={{ color: darkMode ? "white" : "#19202D" }}>
              {state.elemento.position}
            </p>
            <p className="a3">{state.elemento.location}</p>
          </div>
          <a href={state.elemento.apply} rel="noreferrer" target="_blank">
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

        <div className="job-desc-info">{state.elemento.description}</div>

        <div
          className="requirements"
          style={{ color: darkMode ? "white" : "#19202D" }}
        >
          Requirements
        </div>

        <div className="requirements-description">
          {state.elemento.requirements.content}
        </div>

        <ul>
          <li>{state.elemento.requirements.items[0]}</li>
          <li>{state.elemento.requirements.items[1]}</li>
          <li>{state.elemento.requirements.items[2]}</li>
          <li>{state.elemento.requirements.items[3]}</li>
        </ul>

        <div
          className="task-job"
          style={{ color: darkMode ? "white" : "#19202D" }}
        >
          What You Will Do
        </div>

        <div className="willDo-description">{state.elemento.role.content}</div>

        <ol>
          <li>{state.elemento.role.items[0]}</li>
          <li>{state.elemento.role.items[1]}</li>
          <li>{state.elemento.role.items[2]}</li>
          <li>{state.elemento.role.items[3]}</li>
        </ol>
      </main>
      <div
        className="footer-container"
        style={{ backgroundColor: darkMode ? "#19202D" : "white" }}
      >
        {window.innerWidth > 600 && (
          <div className="c">
            <p className="c1" style={{ color: darkMode ? "white" : "#19202D" }}>
              {state.elemento.position}
            </p>
            <p className="c2">{state.elemento.company}</p>
          </div>
        )}
        <a href={state.elemento.apply} rel="noreferrer" target="_blank">
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
