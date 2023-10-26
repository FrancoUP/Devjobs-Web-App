import { useDevJobsContext } from "../context/DevJobsContext";
import { useState } from "react";

export function JobContainers({ children }) {
  const [hover, setHover] = useState(false);
  const {
    activateButton,
    setCountLoadMore,
    startResearch,
    activateButton2,
    setCountLoadMore2,
  } = useDevJobsContext();

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  const go = startResearch ? activateButton : activateButton2;

  return (
    <div className="job-main-container">
      {children}
      {go && (
        <div className="container-byn-load-more">
          <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleMouseOut}
            onTouchEnd={handleMouseOut}
            style={{
              backgroundColor: hover ? "#939BF4" : "#5964E0",
            }}
            className="load-more"
            onClick={() => {
              if (startResearch)
                setCountLoadMore((countLoadMore) => countLoadMore + 1);
              else setCountLoadMore2((countLoadMore2) => countLoadMore2 + 1);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
