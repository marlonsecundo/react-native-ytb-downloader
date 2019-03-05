import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './ducks';

const middlewares = [];

const appropriateCompose = !__DEV__
  ? compose(applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  );

const store = createStore(reducers, appropriateCompose);

export default store;
