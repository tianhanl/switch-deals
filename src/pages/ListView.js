import React from 'react';

import ConnectedSearchBar from '../containers/ConnectedSearchBar';
import PostList from '../containers/PostList';

const ListView = () => (
  <div>
    <ConnectedSearchBar />
    <PostList />
  </div>
);

export default ListView;
