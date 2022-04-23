import { createContext, useState } from "react";

const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, setCounter, incrementCounter, decrementCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContext;
