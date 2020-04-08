import React, { useState, useEffect } from "react";

const Counting = (startNumber: number) => {
  const [number, updateNumber] = useState(startNumber);
  return { number, updateNumber };
};

///useEffect = it is like componentDidMount + componentDidUpdate in class
//when getting started, it runs function once like componentDidMount
//default form : useEffect(function,[target])
//function is what I want to run when changes are found
//target : when the things in the array is changed, function would be activated
//if there isn't any target like useEffect(function), then it detects all changes and executes function
//if there is an empty array like useEffect(function,[]), useEffect is only activated once.
//so, to sum up,

//1. useEffect(function) = componentDidupdate(detect every change)
//2. useEffect(function,[target]) = componentDidUpdate(only for target's changes)
//3. useEffect(function,[]) = componentDidMount

////////////////////////////////////////////////////////////////////////////////////
const App = () => {
  const { number, updateNumber } = Counting(0);

  //useEffect
  ///////////////////////////////////////////////////
  const sayHello = () => console.log("hello");
  useEffect(sayHello, [number]);
  ////////////////////////////////////////////////////

  const validator = (number: number) => {
    if (number > 0) {
      return updateNumber(number - 1);
    } else {
      return undefined;
    }
  };

  return (
    <div>
      <button onClick={() => updateNumber(number + 1)}>Increment</button>
      <button onClick={() => validator(number)}>Decrement</button>
      <div>{number}</div>
    </div>
  );
};
export default App;
