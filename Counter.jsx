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
