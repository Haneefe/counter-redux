import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const [value, setValue] = useState(0);
  const addValue = Number(value) || 0;
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decrement());
  };
  const handleIncrease = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
    setValue(0);
  };
  const InputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const addAmountHandler = (e) => {
    dispatch(incrementByAmount(addValue));
  };
  return (
    <section>
      <div>
        <button onClick={handleDecrease}>-</button>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>+</button>
      </div>
      <input type="text" value={value} onChange={InputChangeHandler} />
      <button onClick={handleReset}>Reset</button>
      <button onClick={addAmountHandler}>Add Amount</button>
    </section>
  );
};

export default CounterView;
