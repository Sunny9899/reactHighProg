import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);

  if (num === 5) {
    throw new Error("Limit Reached");
  }

 var increment =function(){
    setNum(num + 1);
  }

  
  return (
    <div>
      <p>{num}</p>
      <button onClick={increment}>Click to increase</button>
    </div>
  );
};
