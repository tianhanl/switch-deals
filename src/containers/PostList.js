import React from 'react';
import { connect } from 'react-redux';

import { requestPosts } from '../actions/actions';
import Post from '../components/Post';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <ul>
        {this.props.items.map(post => (
          <li key={post.id}>
            <a>{post.title}</a>
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
