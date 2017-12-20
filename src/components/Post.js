import React from 'react';

const Post = ({ post }) => (
  <li className="post-item">
    <a className="post-item-title" href={post.data.url} target="_black">
      {post.data.title}
    </a>
    <div className="post-item-meta">
      <span className="post-item-ups">{post.data.ups} UPs</span>
      <span className={'post-item-tag ' + post.data.link_flair_css_class}>
        {post.data.link_flair_text}
      </span>
    </div>
  </li>
);

export default Post;
