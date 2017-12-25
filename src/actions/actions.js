import axios from 'axios';

// status actions used with redux-promise-middleware
export const POSTS_PENDING = 'POSTS_PENDING';
export const POSTS_FULFILLED = 'POSTS_FULFILLED';
export const POSTS_REJECTED = 'POSTS_REJECTED';
export const ADD_POST = 'ADD_POST';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

const redditAPISrc = filter =>
  `https://www.reddit.com/r/NintendoSwitchDeals/${filter}.json`;

// function shouldRequestPosts(state) {
//   const posts = state.posts;
//   if (!posts) {
//     return true;
//   } else if (posts.isRequesting) {
//     return false;
//   } else {
//     return posts.isInvalid;
//   }
// }

export function requestPosts(filter) {
  return {
    type: 'POSTS',
    payload: {
      promise: new Promise((resolve, reject) => {
        axios
          .get(redditAPISrc(filter))
          .then(response => resolve(response), err => reject(err));
      })
    },
    meta: {
      filter: filter
    }
  };
}

export function addPost(item) {
  return {
    type: ADD_POST,
    item: item
  };
}

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    term: term
  };
}
