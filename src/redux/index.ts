import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware: Array<Middleware<{}>> = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = (preloadedState?: any): any => {
  const createAppStore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);
  return createAppStore;
};

export default store;
