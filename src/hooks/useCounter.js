import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState || 0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };
  const reset = () => {
    setCount(0);
  };
  return {
    count,
    increment,
    decrement,
    reset,
  };
};
