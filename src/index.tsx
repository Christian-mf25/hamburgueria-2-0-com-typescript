import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Providers from "./Provider";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
