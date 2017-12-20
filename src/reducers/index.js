import { combineReducers } from 'redux';

import posts from './posts';
import searchTerm from './searchTerm';
const switchDeals = combineReducers({
  posts,
  searchTerm
});

export default switchDeals;
