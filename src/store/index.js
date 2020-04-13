import { createStore } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import storeApp from 'reducers';

/* eslint-disable no-underscore-dangle */

const store = createStore(
  storeApp /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/* eslint-enable */

export default store;
