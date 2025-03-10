import { decreaseAsync, increaseAsync } from '../modules/counter';

import Counter from './Counter';
import { connect } from 'react-redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  },
)(CounterContainer);
