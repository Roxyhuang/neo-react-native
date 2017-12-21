import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import createSagaMiddleware from 'redux-saga';
import devTools from 'remote-redux-devtools';

import reducers from '../reducers';
import sagas from '../effects';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore(onComplete) {

  const engine = createEngine('AppTree');
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
      // storage.reducer(reducers), // Apply redux-storage so we can persist Redux state to disk
      compose(
          applyMiddleware(
              sagaMiddleware,
              storeMiddleware,
              logger,
          ),
          devTools(),
      ),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  // const load = storage.createLoader(engine);
  // load(store)
  //     .then(onComplete)
  //     .catch(() => console.log('Failed to load previous state'));

  sagaMiddleware.run(sagas);

  return store;
}