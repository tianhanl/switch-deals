import { SET_SEARCH_TERM } from '../actions/actions';

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
    default:
      return state;
  }
};

export default searchTerm;
