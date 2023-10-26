import svgLocation from "../assets/desktop/icon-location.svg";
import svgCheck from "../assets/desktop/icon-check.svg";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function OverlayFilterChoices() {
  const [showList, setShowList] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const {
    setCity,
    city,
    listCities,
    setCountryCode,
    filterFullTime,
    setFilterFullTime,
    setOpenFilterOptions,
    setSearch,
    jobType,
    setNotFound,
  } = useDevJobsContext();

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  function handleMouseOver2() {
    setHover2(true);
  }

  function handleMouseOut2() {
    setHover2(false);
  }

  return (
    <>
      <div className="overlay-choices"></div>
      <div className="container-filter-choices">
        <div className="location-container-choices">
          <img className="img-location" src={svgLocation} alt="" />

          <input
            className="location-input-choices"
            type="text"
            name="search"
            placeholder="Filter by location…"
            value={city}
            onClick={() => setNotFound(false)}
            onChange={(e) => {
              setCity(e.target.value);
              setShowList(() => e.target.value !== "" && true);
              setNotFound(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (city === "") alert("Select a city first !");
                else if (jobType === "") alert("Select a job first!");
                else {
                  setSearch(true);
                  setOpenFilterOptions(false);
                }
              }
            }}
          ></input>

          {showList && (
            <ul className="list-cities-container-choices">
              {listCities?.map((el, i) => (
                <li
                  key={i}
                  className="city-element"
                  onClick={() => {
                    setCity(
                      el.address.city +
                        ", " +
                        el.address.state +
                        ", " +
                        el.address.countryName
                    );
                    setCountryCode(
                      el.address.countryCodeIsoAlpha2.toLowerCase()
                    );
                    setShowList(false);
                  }}
                >
                  {`
                  ${el.address.city}, ${el.address.state}, ${el.address.countryName}
                  `}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="full-time-box">
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleMouseOver}
            onTouchEnd={handleMouseOut}
            style={{
              backgroundColor: filterFullTime || hover ? "#5964E0" : "#e7e7e7",
            }}
            className="check"
            onClick={() =>
              setFilterFullTime((filterFullTime) => !filterFullTime)
            }
          >
            <img
              style={{ opacity: filterFullTime ? "1" : "0" }}
              className="img-check"
              src={svgCheck}
              alt=""
            />
          </div>

          <p className="filter">Full Time Only</p>
        </div>

        <div className="btn-search-cont">
          <button
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            onTouchStart={handleMouseOver2}
            onTouchEnd={handleMouseOut2}
            style={{
              backgroundColor: hover2 ? "#939BF4" : "#5964E0",
            }}
            className="btn-search2"
            onClick={() => {
              if (city === "") alert("Select a city first !");
              else setOpenFilterOptions(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
