import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from 'store/sagas';

import userReducers from "store/User/reducers";

const reducers = combineReducers({
  user: userReducers,
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
