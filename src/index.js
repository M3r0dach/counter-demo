import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
