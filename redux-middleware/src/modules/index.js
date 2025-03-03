import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';

import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
