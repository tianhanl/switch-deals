import React, { Component } from 'react';
import './App.css';
import PostList from './containers/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ConnectedSearchBar from './containers/ConnectedSearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Switch Deals</h1>
          <ConnectedSearchBar />
        </header>
        <Router>
          <Route path="/" component={PostList} />
        </Router>
      </div>
    );
  }
}

export default App;
