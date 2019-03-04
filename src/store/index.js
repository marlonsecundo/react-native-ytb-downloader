import { createStore, appyMiddleware } from 'redux';

import reducers from './ducks';

const middlewares = [];

const createAppropriateStore = __DEV__ ? createStore : createStore;

const store = console.tron.createStore(reducers);

export default store;
