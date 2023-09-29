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
