import { POSTS_PENDING, POSTS_FULFILLED, POSTS_REJECTED } from '../actions';

export function posts(
  state = {
    items: [],
    isRequesting: false,
    isInvalid: false
  },
  action
) {
  switch (action.type) {
    case POSTS_PENDING:
      return Object.assign({}, state, {
        isRequesting: true
      });
    case POSTS_FULFILLED:
      return Object.assign({}, state, {
        isRequesting: false,
        isInvalid: false,
        items: action.payload.data
      });
    case POSTS_REJECTED:
      return Object.assign({}, state, {
        isInvalid: true
      });
    default:
      return state;
  }
}
