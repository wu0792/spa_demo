import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { CodeSplit } from './component/CodeSplit';
import Demo1 from './component/Demo1';
import { WithParamsComponent } from './component/withParamComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Link to={`/demo1`}>Demo1 </Link>
            <Link to={`/codesplit`}>Code Split </Link>
            <Link to={`/params`}>WithParams </Link>

            <Route path='/demo1' component={Demo1} />
            <Route path='/codesplit' component={CodeSplit} />
            <Route path='/params' render={route => {
              return (
                <React.Fragment>
                  <Link to={`/params/withparams`}>带参数，默认</Link>
                  <Link to={`/params/withparams/abc`}>带参数，abc</Link>
                  <Link to={`/params/withparams/1234`}>带参数，1234</Link>

                  <Route path='/params/withparams' component={WithParamsComponent} />
                </React.Fragment>
              )
            }} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
