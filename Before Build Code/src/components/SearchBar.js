import svgSearch from "../assets/desktop/icon-search.svg";
import svgMobile from "../assets/desktop/icon-search-mobile.svg";
import svgLocation from "../assets/desktop/icon-location.svg";
import svgCheck from "../assets/desktop/icon-check.svg";
import svgFilter from "../assets/mobile/icon-filter.svg";
import { OverlayFilterChoices } from "./OverlayFilterChoices";
import { useState } from "react";
import { useDevJobsContext } from "../context/DevJobsContext";

export function SearchBar() {
  const [showList, setShowList] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const {
    setCity,
    city,
    listCities,
    setCountryCode,
    jobType,
    setJobType,
    setSearch,
    filterFullTime,
    setFilterFullTime,
    openFilterOptions,
    setOpenFilterOptions,
    setStartResearch,
    setNotFound,
    setCountLoadMore,
    darkMode,
  } = useDevJobsContext();

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
    <>
      {openFilterOptions && <OverlayFilterChoices />}

      <div
        className="search-bar-container"
        style={darkMode ? { backgroundColor: "#19202D" } : {}}
      >
        <div className="serach-container">
          <img className="img-search" src={svgSearch} alt="" />
          <input
            style={
              darkMode ? { backgroundColor: "#19202D", color: "lightgrey" } : {}
            }
            className="serach-input"
            type="text"
            name="search"
            value={jobType}
            placeholder={
              window.innerWidth > 700
                ? "Filter by title, companies, expertise…"
                : "Filter by title…"
            }
            onClick={() => {
              setNotFound(false);
              setCountLoadMore(0);
            }}
            onChange={(e) => {
              setJobType(e.target.value);
              setCountLoadMore(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setNotFound(false);
                setStartResearch(true);
                if (jobType === "") alert("Select a job first!");
                else if (city === "")
                  alert(
                    "Select a city first clicking on the filter icon close to the search button!"
                  );
                else setSearch(true);
              }
            }}
          ></input>
        </div>

        {window.innerWidth > 1000 && (
          <div className="location-container">
            <img className="img-location" src={svgLocation} alt="" />

            <input
              style={
                darkMode
                  ? { backgroundColor: "#19202D", color: "lightgrey" }
                  : {}
              }
              className="location-input"
              type="text"
              name="search"
              placeholder="Filter by location…"
              value={city}
              onClick={() => {
                setNotFound(false);
                setCountLoadMore(0);
              }}
              onChange={(e) => {
                setCity(e.target.value);
                setShowList(() => e.target.value !== "" && true);
                setNotFound(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setNotFound(false);
                  setStartResearch(true);
                  if (city === "") alert("Select a city first !");
                  else if (jobType === "") alert("Select a job first!");
                  else setSearch(true);
                }
              }}
            ></input>

            {showList && (
              <ul className="list-cities-container">
                {listCities?.map((el, i) => (
                  <li
                    key={i}
                    className="city-element"
                    onClick={() => {
                      setNotFound(false);
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
        )}

        <div className="container-filter">
          {window.innerWidth > 1000 ? (
            <>
              <div
                className="check"
                onMouseOver={handleMouseOver1}
                onMouseOut={handleMouseOut1}
                style={{
                  backgroundColor:
                    filterFullTime || hover1 ? "#5964E0" : "#e7e7e7",
                }}
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

              <p className="filter" style={darkMode ? { color: "white" } : {}}>
                Full Time Only
              </p>
            </>
          ) : (
            <div
              className="container-icon-filter"
              onClick={() =>
                setOpenFilterOptions((openFilterOptions) => !openFilterOptions)
              }
            >
              <img
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
                onTouchStart={handleMouseOver3}
                onTouchEnd={handleMouseOut3}
                style={{ opacity: hover3 ? "0.5" : "1" }}
                className="logo-filter"
                src={svgFilter}
                alt=""
              />
            </div>
          )}

          {window.innerWidth > 600 ? (
            <button
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
              onTouchStart={handleMouseOver2}
              onTouchEnd={handleMouseOut2}
              style={{
                backgroundColor: hover2 ? "#939BF4" : "#5964E0",
              }}
              className="btn-search"
              onClick={() => {
                if (city === "" || jobType === "")
                  alert("Select a city and job type first!");
                else setSearch(true);
                setStartResearch(true);
                setCountLoadMore(0);
              }}
            >
              Search
            </button>
          ) : (
            <button
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
              onTouchStart={handleMouseOut2}
              onTouchEnd={handleMouseOut2}
              style={{
                backgroundColor: hover2 ? "#939BF4" : "#5964E0",
              }}
              className="btn-search"
              onClick={() => {
                if (city === "" || jobType === "")
                  alert("Select a city and job type first!");
                else setSearch(true);
                setStartResearch(true);
                setCountLoadMore(0);
              }}
            >
              <img className="img-srch" alt="" src={svgMobile} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
