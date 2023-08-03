"use client"
import { increment, decrement } from "@/GlobalRedux/Features/counterSlice";
import { Provider, useDispatch } from "react-redux";
import { AppDispatch } from "@/GlobalRedux/store";

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inc = () => {
    dispatch(increment());
  };
  return (
    
    <div>
      <h1>Counter</h1>
      {/* <button
        onClick={inc}
      >
        Increment
      </button> */}
    </div>
  );
};

export default Counter;
