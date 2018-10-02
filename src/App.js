import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { CodeSplit } from './component/CodeSplit';
import Demo1 from './component/Demo1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Link to={`/demo1`}>Demo1 </Link>
            <Link to={`/codesplit`}>Code Split </Link>

            <Route path='/demo1' component={Demo1} />
            <Route path='/codesplit' component={CodeSplit} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
