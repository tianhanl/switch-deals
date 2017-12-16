import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import switchDeals from '../reducers/index';

export default function configureStore(preloadedState) {
  return createStore(
    switchDeals,
    preloadedState,
    applyMiddleware(thunkMiddleware, promiseMiddleware)
  );
}
