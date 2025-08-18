import React, { useState } from "react";
import Button from "./components/Button/Button";

// const Counter = () => {
//   let count = 1;

//   return (
//     <div>
//       <button onClick={() => ++count}>count is {count}</button>
//     </div>
//   );
// };

const Counter = () => {
  const [count, setCount] = useState(1);

  const setCounterHandler = () => {
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Button onClick={setCounterHandler}>count is {count}</Button>
    </div>
  );
};

export default Counter;
