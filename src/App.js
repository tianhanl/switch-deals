import React, { Component } from 'react';
import './App.css';
import PostList from './containers/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListView from './pages/ListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Switch Deals</h1>
        </header>
        <Router>
          <Route path="/" component={ListView} />
        </Router>
      </div>
    );
  }
}

export default App;
