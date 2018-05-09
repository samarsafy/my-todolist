import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
export default Router;

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
