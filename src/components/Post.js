import React from 'react';

const Post = ({ post }) => (
  <li className="post-item">
    <a>{post.data.title}</a>
  </li>
);

export default Post;
