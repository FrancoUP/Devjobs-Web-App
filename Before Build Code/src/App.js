import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { JobDescriptionPage2 } from "./pages/JobDescriptionPage2";
import { JobDescriptionPage1 } from "./pages/JobDescriptionPage1";

export default function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="description2" element={<JobDescriptionPage2 />}></Route>
          <Route path="description1" element={<JobDescriptionPage1 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
