import React, { Dispatch } from "react";

const initialState = {
  count: 0,
};

type initialStateType = {
  count: number;
};

type Actions =
  | { type: "ADD"; payload: number }
  | { type: "SUB"; payload: number };

export const CounterContext = React.createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: number, action: Actions) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "SUB":
      return state - action.payload;
    default:
      return state;
  }
};

const MainReducer = ({ count }: initialStateType, action: Actions) => ({
  count: reducer(count, action),
});

export const CounterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(MainReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
