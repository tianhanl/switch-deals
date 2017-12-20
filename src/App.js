import React, { Component } from 'react';
import './App.css';
import PostList from './containers/PostList';

import ConnectedSearchBar from './containers/ConnectedSearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Switch Deals</h1>
        </header>
        <ConnectedSearchBar />
        <PostList />
      </div>
    );
  }
}

export default App;
