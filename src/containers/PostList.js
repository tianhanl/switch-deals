import React from 'react';
import { connect } from 'react-redux';

import { requestPosts, addPost } from '../actions/actions';
// import Post from '../components/Post';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <ul>
        {this.props.items.map(post => (
          <li key={post.data.id}>
            <a>{post.data.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(requestPosts());
    },
    addPost: item => {
      dispatch(addPost(item));
    }
  };
};

function mapStateToProps(state) {
  const posts = state.posts;
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
