import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ListView from './pages/ListView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>
              <a
                href="https://www.reddit.com/r/NintendoSwitchDeals/"
                target="_blank"
              >
                Nintendo Switch Deals
              </a>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/hot">HOT</Link>{' '}
                </li>
                <li>
                  <Link to="/new">NEW</Link>{' '}
                </li>
                <li>
                  <Link to="/rising">RISING</Link>{' '}
                </li>
                <li>
                  <Link to="/top">TOP</Link>{' '}
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/:filter" component={ListView} />
        </div>
      </Router>
    );
  }
}

export default App;
