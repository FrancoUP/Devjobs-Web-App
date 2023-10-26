import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DevJobsProvider } from "./context/DevJobsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DevJobsProvider>
      <App />
    </DevJobsProvider>
  </React.StrictMode>
);
