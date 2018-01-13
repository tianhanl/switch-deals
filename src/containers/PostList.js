import React from 'react';
import { connect } from 'react-redux';

import { requestPosts, addPost } from '../actions/actions';
// import Post from '../components/Post';
import Post from '../components/Post';

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts(this.props.filter);
  }

  // redo requesting when filter changes
  componentWillReceiveProps(nextProps) {
    if (!this.props.isRequesting && !this.props.posts[nextProps.filter]) {
      this.props.getPosts(nextProps.filter);
    }
  }

  render() {
    if (this.props.isRequesting) {
      return <p>Loading...</p>;
    }

    if (this.props.isInvalid) {
      return <div>There is a problem with the data</div>;
    }

    if (!this.props.items) {
      return <p>No items found</p>;
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
    getPosts: filter => {
      dispatch(requestPosts(filter));
    },
    addPost: item => {
      dispatch(addPost(item));
    }
  };
};

function mapStateToProps(state, ownProps) {
  const posts = state.posts;
  const { isRequesting, isInvalid } = posts;
  const items = posts[ownProps.filter] ? posts[ownProps.filter].items : null;
  return {
    posts,
    isRequesting,
    items,
    isInvalid,
    filter: ownProps.filter,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
