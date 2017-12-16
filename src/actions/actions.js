import axios from 'axios';

export const POSTS = 'POSTS';
// status actions used with redux-promise-middleware
export const POSTS_PENDING = 'POSTS_PENDING';
export const POSTS_FULFILLED = 'POSTS_FULFILLED';
export const POSTS_REJECTED = 'POSTS_REJECTED';

const redditAPISrc = 'https://www.reddit.com/r/NintendoSwitchDeals.json';

function shouldRequestPosts(state) {
  const posts = state.posts;
  if (!posts) {
    return true;
  } else if (posts.isRequesting) {
    return false;
  } else {
    return posts.isInvalid;
  }
}

export function requestPosts() {
  return {
    type: POSTS,
    payload: axios.get(redditAPISrc)
  };
}

export function requestPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldRequestPosts(getState())) {
      return dispatch(requestPosts());
    }
  };
}
