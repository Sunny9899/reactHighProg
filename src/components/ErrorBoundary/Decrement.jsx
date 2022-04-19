import React, { useState } from "react";

export const Decrement = () => {
  const [num2, setNum2] = useState(10);

  if (num2 === 2) {
    throw new Error("Limit Reached");
  }

  var decrement=function(){
    setNum2(num2 - 1);
  }

  return (
    <div>
      <p>{num2}</p>
      <button onClick={decrement}>Click to decrease</button>
    </div>
  );
};
