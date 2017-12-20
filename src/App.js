import React, { Component } from 'react';
import './App.css';
import PostList from './containers/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Switch Deals</h1>
        </header>
        <PostList />
      </div>
    );
  }
}

export default App;
