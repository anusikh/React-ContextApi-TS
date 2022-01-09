import React from "react";
import { CounterContext } from "./context/context";
import "./styles.css";

export default function App() {
  const { state, dispatch } = React.useContext(CounterContext);

  return (
    <div className="App">
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: 5,
          });
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "SUB",
            payload: 5,
          });
        }}
      >
        Sub
      </button>
    </div>
  );
}
