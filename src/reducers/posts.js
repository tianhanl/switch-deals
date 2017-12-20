import {
  POSTS_PENDING,
  POSTS_FULFILLED,
  POSTS_REJECTED,
  POSTS,
  ADD_POST
} from '../actions/actions';

const posts = (
  state = {
    items: [],
    isRequesting: false,
    isInvalid: false
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case POSTS_PENDING:
      return Object.assign({}, state, {
        isRequesting: true
      });
    case POSTS_FULFILLED:
      return Object.assign({}, state, {
        isRequesting: false,
        isInvalid: false,
        items: action.payload.data.data.children
      });
    case POSTS_REJECTED:
      return Object.assign({}, state, {
        isRequesting: false,
        isInvalid: true
      });
    case ADD_POST:
      return Object.assign({}, state, {
        items: [...state.items, action.item]
      });
    default:
      return state;
  }
};

export default posts;
