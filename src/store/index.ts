import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'store/sagas';

import userReducers from "store/user/reducers";
import mapReducers from "store/map/reducers";

const reducers = combineReducers({
  user: userReducers,
  map: mapReducers,
});

const sagaMiddleware = createSagaMiddleware();

const store =
  createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

sagaMiddleware.run(sagas);
export default store;
