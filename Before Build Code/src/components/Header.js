import svgImage from "../assets/desktop/bg-pattern-header.svg";
import svgMobile from "../assets/mobile/bg-pattern-mobile.svg";
import svgTitle from "../assets/desktop/logo.svg";
import svgSwitcher from "../assets/desktop/switcher.svg";
import svgAA from "../assets/desktop/aa.svg";
import { useDevJobsContext } from "../context/DevJobsContext";

export function Header() {
  const { setDarkMode, darkMode } = useDevJobsContext();

  return (
    <div className="main-container">
      {window.innerWidth > 750 ? (
        <img className="img-header" src={svgImage} alt="" />
      ) : (
        <img
          onClick={() => setDarkMode((darkMode) => !darkMode)}
          className="img-header"
          src={svgMobile}
          alt=""
        />
      )}

      <div className="title-bar-container">
        <img className="img-title" src={svgTitle} alt="" />
        {darkMode ? (
          <img
            onClick={() => setDarkMode((darkMode) => !darkMode)}
            className="img-switcher"
            src={svgAA}
            alt=""
          />
        ) : (
          <img
            onClick={() => setDarkMode((darkMode) => !darkMode)}
            className="img-switcher"
            src={svgSwitcher}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
