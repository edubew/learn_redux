import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  // Add state to the component
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          type="submit"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          type="submit"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </section>
  );
};

export default Counter;
