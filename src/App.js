import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
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
          <Switch>
            {/* This redirection is used to solve filter error caused by hosting on ghpages*/}
            <Redirect from="/switch-deals" to="/hot" />
            <Route path="/:filter" component={ListView} />
            <Redirect from="/" to="/hot" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
