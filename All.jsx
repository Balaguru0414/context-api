// UseContext ===========================================================

import Counter from "./Counter";
import CounterContextProvider from "./context/CounterContext";

const UseContext = () => {
  return (
    <CounterContextProvider>
      <h1>Use Context</h1>
      <Counter />
    </CounterContextProvider>
  );
};

export default UseContext;

// Counter ==============================================================

import { useCounter } from "./context/CounterContext";
import One from "./components/One";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <One />
    </div>
  );
};

export default Counter;

// CounterContext =======================================================

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

// One ==================================================================

import { useCounter } from "../context/CounterContext";
import Increment from "./Increment";

const One = () => {
  const { count } = useCounter();
  return (
    <div style={{ background: "red" }}>
      <h3>Count : {count}</h3>
      <Increment />
    </div>
  );
};

export default One;

// Increment ============================================================

import { useCounter } from "../context/CounterContext";

const Increment = () => {
  const { increment } = useCounter();
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Increment;
