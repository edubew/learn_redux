import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment, decrement, reset, incrementByAmount,
} from './counterSlice';
import './counter.css';

const Counter = () => {
  // Add state to the component
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // State for the increment amount
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="counter__container">
      <p>{count}</p>
      <div className="btn__container1">
        <button type="submit" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="submit" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div className="btn">
        <button
          type="submit"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button type="submit" onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
