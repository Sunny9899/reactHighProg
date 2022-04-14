import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);

  if (num === 5) {
    throw new Error("Limit Reached");
  }

  function inc() {
    setNum((num) => num + 1);
  }

  return (
    <div>
      <p>{num}</p>
      <button onClick={inc}>Click to increase</button>
    </div>
  );
};

/*
export const Hero=({heroName})=>{
    if(heroName==="Joker"){
        throw new Error('Not a Hero')
    }
    return (
        <div>
            {heroName}
        </div>
    );
}
*/
