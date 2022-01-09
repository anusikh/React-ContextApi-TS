import { render } from "react-dom";

import App from "./App";

import { CounterProvider } from "./context/context";

const rootElement = document.getElementById("root");
render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  rootElement
);
