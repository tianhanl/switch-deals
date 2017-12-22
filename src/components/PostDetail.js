import React from 'react';

const PostDetail = ({ match }) => (
  <div>
    <p>{match.params.id}</p>
  </div>
);
