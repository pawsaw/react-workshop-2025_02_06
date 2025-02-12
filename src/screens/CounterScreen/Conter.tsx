import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import { countSelector, decrement, increment, reset } from '../../domain/counter';

export const Counter = () => {
  const count = useSelector<State, number>(countSelector);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button className="secondary" onClick={() => dispatch(decrement())}>
        -
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="tertiary" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};
