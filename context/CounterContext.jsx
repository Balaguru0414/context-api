import { createContext, useContext, useState } from "react";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  const value = { count, increment, decrement };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
