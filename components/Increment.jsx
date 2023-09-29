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
