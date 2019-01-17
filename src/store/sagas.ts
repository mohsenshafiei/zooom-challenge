import { all } from "redux-saga/effects";
import userSaga from "./user/saga";
import mapSaga from "./map/saga";
import uiSaga from "./ui/saga";

function* sagas() {
  yield all([...userSaga, ...mapSaga, ...uiSaga]);
}

export default sagas;
