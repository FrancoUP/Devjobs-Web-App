import { useState, useContext, createContext, useEffect } from "react";
import dataJobs from "../data.json";

const DevJobsContext = createContext();

function DevJobsProvider({ children }) {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [listCities, setListCities] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [listJobs, setListJobs] = useState([]);
  const [jobType, setJobType] = useState("");
  const [search, setSearch] = useState(false);
  const [filterFullTime, setFilterFullTime] = useState(false);
  const [openFilterOptions, setOpenFilterOptions] = useState(false);
  const [listJobsFiltered, setListJobsFiltered] = useState([]);
  const [startResearch, setStartResearch] = useState(false);
  const [activateButton, setActivateButton] = useState(false);
  const [activateButton2, setActivateButton2] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [countLoadMore, setCountLoadMore] = useState(0);
  const [countLoadMore2, setCountLoadMore2] = useState(0);
  const [onScreenList, setOnScreenList] = useState([]);
  const [croppedList, setCroppedList] = useState([]);
  const [croppedList2, setCroppedList2] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      (async function () {
        try {
          const resData = await fetch(
            `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${city}&apiKey=RVVfMjA5ZDA0ODhlODQ4NGNlZWE0YmMzZDQwNTMxOTk5ZGI6OWZhNGVhNzYtMWU4Yy00MWJjLThhMDUtOTRkZjBmY2NkZDEx`
          );

          if (!resData.ok) throw new Error("Problems to fetch location data");

          const data = await resData.json();
          setListCities(data.locations);
        } catch (err) {
          console.log(err);
        }
      })();
    },
    [city]
  );

  useEffect(
    function () {
      (async function () {
        if (search) {
          try {
            const resData = await fetch(
              `http://api.adzuna.com/v1/api/jobs/${countryCode}/search/1?app_id=8ba2f550&app_key=757a734682e6b0b6a7007c8aae173f47&results_per_page=100&what=${jobType}&content-type=application/json`
            );

            if (!resData.ok) throw new Error("Problems to fetch jobs data");

            const data = await resData.json();

            setData(data);

            setListJobsFiltered(
              data.results
                .filter((el) =>
                  el.location.display_name
                    .split(",")
                    .includes(city.split(", ").map((el) => el.trim())[0])
                )
                .filter(
                  (el) =>
                    el.contract_time
                      ?.replace(/[^a-zA-Z]/g, "")
                      .toLowerCase() === "fulltime"
                )
            );

            setListJobs(
              data.results.filter((el) =>
                el.location.display_name
                  .split(",")
                  .includes(city.split(", ").map((el) => el.trim())[0])
              )
            );
          } catch (err) {
            console.log(err);
            setNotFound(true);
          } finally {
            setSearch(false);
          }
        }
      })();
    },
    [
      countryCode,
      city,
      jobType,
      search,
      filterFullTime,
      listJobs,
      listJobsFiltered,
    ]
  );

  useEffect(
    function () {
      setOnScreenList(filterFullTime ? [...listJobsFiltered] : [...listJobs]);
    },
    [filterFullTime, listJobsFiltered, listJobs]
  );

  useEffect(
    function () {
      if (onScreenList.length === 0 && data !== null) setNotFound(true);
      else setNotFound(false);
    },
    [onScreenList, data]
  );

  useEffect(
    function () {
      // console.log(dataJobs);
      // console.log(window.innerWidth);
      // console.log(dataJobs.length);
      // console.log([...dataJobs].slice(0, 9));

      if (countLoadMore2 === 0) {
        if (window.innerWidth > 1000 && dataJobs.length > 9) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 9));
        } else if (
          window.innerWidth > 600 &&
          window.innerWidth <= 1000 &&
          dataJobs.length > 6
        ) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 6));
        } else if (window.innerWidth <= 600 && dataJobs.length > 4) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 4));
        } else {
          setActivateButton2(false);

          setCroppedList2([...dataJobs]);
        }
      } else if (countLoadMore2 === 1) {
        if (window.innerWidth > 1000 && dataJobs.length > 18) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 18));
        } else if (
          window.innerWidth > 600 &&
          window.innerWidth <= 1000 &&
          dataJobs.length > 12
        ) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 12));
        } else if (window.innerWidth <= 600 && dataJobs.length > 8) {
          setActivateButton2(true);
          setCroppedList2([...dataJobs].slice(0, 8));
        } else {
          setActivateButton2(false);
          setCroppedList2([...dataJobs]);
        }
      } else {
        setActivateButton2(false);
        setCroppedList2([...dataJobs]);
      }
    },
    [countLoadMore2]
  );

  useEffect(
    function () {
      if (countLoadMore === 0) {
        if (window.innerWidth > 1000 && onScreenList.length > 9) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 9));
        } else if (
          window.innerWidth > 600 &&
          window.innerWidth <= 1000 &&
          onScreenList.length > 6
        ) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 6));
        } else if (window.innerWidth <= 600 && onScreenList.length > 4) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 4));
        } else {
          setActivateButton(false);
          setCroppedList([...onScreenList]);
        }
      } else if (countLoadMore === 1) {
        if (window.innerWidth > 1000 && onScreenList.length > 18) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 18));
        } else if (
          window.innerWidth > 600 &&
          window.innerWidth <= 1000 &&
          onScreenList.length > 12
        ) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 12));
        } else if (window.innerWidth <= 600 && onScreenList.length > 8) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 8));
        } else {
          setActivateButton(false);
          setCroppedList([...onScreenList]);
        }
      } else if (countLoadMore === 2) {
        if (window.innerWidth > 1000 && onScreenList.length > 27) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 27));
        } else if (
          window.innerWidth > 600 &&
          window.innerWidth <= 1000 &&
          onScreenList.length > 24
        ) {
          setActivateButton(true);
          setCroppedList([...onScreenList].slice(0, 24));
        } else if (window.innerWidth <= 600 && onScreenList.length > 20) {
          setActivateButton(true);
          return setCroppedList([...onScreenList].slice(0, 20));
        } else {
          setActivateButton(false);
          setCroppedList([...onScreenList]);
        }
      } else {
        setActivateButton(false);
        console.log("sono anche qui 2");
        setCroppedList([...onScreenList]);
      }
    },
    [countLoadMore, onScreenList, filterFullTime, listJobs, listJobsFiltered]
  );

  useEffect(
    function () {
      if (darkMode)
        document.querySelector("body").style.backgroundColor = "#121721";
      else document.querySelector("body").style.backgroundColor = "#f4f6f8";
    },
    [darkMode]
  );

  return (
    <DevJobsContext.Provider
      value={{
        city,
        setCity,
        listCities,
        setListCities,
        countryCode,
        setCountryCode,
        listJobs,
        setListJobs,
        jobType,
        setJobType,
        search,
        setSearch,
        filterFullTime,
        setFilterFullTime,
        openFilterOptions,
        setOpenFilterOptions,
        dataJobs,
        listJobsFiltered,
        startResearch,
        setStartResearch,
        setActivateButton,
        activateButton,
        notFound,
        setNotFound,
        countLoadMore,
        setCountLoadMore,
        croppedList,
        croppedList2,
        activateButton2,
        setActivateButton2,
        countLoadMore2,
        setCountLoadMore2,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DevJobsContext.Provider>
  );
}

function useDevJobsContext() {
  const context = useContext(DevJobsContext);

  if (context === undefined)
    throw new Error("TodoContext was used outside of the TodoProvider");

  return context;
}

export { DevJobsProvider, useDevJobsContext };
