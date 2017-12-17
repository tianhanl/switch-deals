import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import switchDeals from '../reducers/index';

export default function configureStore() {
  return createStore(switchDeals, {}, applyMiddleware(promiseMiddleware()));
}
