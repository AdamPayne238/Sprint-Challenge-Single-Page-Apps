import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  //App is wrapped by router
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
