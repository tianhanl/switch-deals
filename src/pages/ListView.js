import React from 'react';

import ConnectedSearchBar from '../containers/ConnectedSearchBar';
import PostList from '../containers/PostList';

const ListView = ({ match: { params } }) => (
  <div>
    <ConnectedSearchBar />
    <PostList filter={params.filter || 'hot'} />
  </div>
);

export default ListView;
