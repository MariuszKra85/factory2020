import { createStore } from 'redux';
// eslint-disable-next-line import/no-named-as-default
import storeApp from 'reducers';

const store = createStore(storeApp);

export default store;
