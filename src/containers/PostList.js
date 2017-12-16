import React from 'react';
import { connect } from 'react-redux';

import { requestPostsIfNeeded } from '../actions/action.js';
import Post from '../components/Post';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestPostsIfNeeded());
  }

  render() {
    <ul>{this.props.items.map(post => <Post key={post.id} post={post} />)}</ul>;
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  const { isRequesting, items, isInvalid } = posts || {
    isRequesting: false,
    items: [],
    isInvalid: false
  };
  return {
    posts,
    isRequesting,
    items,
    isInvalid
  };
}

export default connect(mapStateToProps)(PostList);
