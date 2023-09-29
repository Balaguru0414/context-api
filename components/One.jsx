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
