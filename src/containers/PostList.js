import React from 'react';
import { connect } from 'react-redux';

import { requestPosts, addPost } from '../actions/actions';
// import Post from '../components/Post';
import Post from '../components/Post';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (this.props.isRequesting) {
      return <div>Loading...</div>;
    }

    if (this.props.isInvalid) {
      return <div>There is a problem with the data</div>;
    }

    return (
      <ul className="post-list">
        {this.props.items
          .filter(
            post =>
              post.data.title.toLowerCase().indexOf(this.props.searchTerm) > -1
          )
          .map(post => <Post key={post.data.id} post={post} />)}
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
    isInvalid,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
