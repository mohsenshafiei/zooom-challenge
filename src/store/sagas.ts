import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import mapSaga from './map/saga';

function* sagas() {
  yield all([
    ...userSaga,
    ...mapSaga,
  ]);
}

export default sagas;
