import { InfoJobContainer2 } from "../components/InfoJobContainer2";
import { InfoJobContainer1 } from "../components/InfoJobContainer1";
import { JobContainers } from "../components/JobContainers";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { useDevJobsContext } from "../context/DevJobsContext";

export function HomePage() {
  const { startResearch, notFound, croppedList, croppedList2, filterFullTime } =
    useDevJobsContext();

  const newCropped2 = !filterFullTime
    ? croppedList2
    : croppedList2.filter(
        (el) =>
          el.contract?.replace(/[^a-zA-Z]/g, "").toLowerCase() === "fulltime"
      );

  return (
    <div>
      <Header />
      <SearchBar />
      <JobContainers>
        {startResearch
          ? croppedList.map((el, i) => (
              <InfoJobContainer1 key={i} elemento={el} index={i} />
            ))
          : newCropped2.map((el, i) => (
              <InfoJobContainer2 key={i} elemento={el} index={i} id={el.id} />
            ))}

        {notFound && (
          <div>
            <p className="not-found">Not Found!</p>
          </div>
        )}
      </JobContainers>
    </div>
  );
}
