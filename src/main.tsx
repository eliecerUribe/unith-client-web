import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RoutesComponent from "./router/RoutesComponent";
import store from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
