import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);

  if (num === 5) {
    throw new Error("Limit Reached");
  }

 var increement =function(){
    setNum(num + 1);
  }

  
  return (
    <div>
      <p>{num}</p>
      <button onClick={increement}>Click to increase</button>
    </div>
  );
};
