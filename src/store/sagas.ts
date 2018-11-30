import { all } from 'redux-saga/effects';
import userSaga from './User/saga';

function* sagas() {
  yield all([
    ...userSaga,
  ]);
}

export default sagas;
