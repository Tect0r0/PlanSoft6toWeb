import React from "react";
import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
  };
  const rest = () => {
    setCount(count - 1);
  };
  return { count, sum, rest };
};

export default useCount;
