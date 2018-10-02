import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class Demo1 extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Link to={`/path/1`}>Link 1 </Link>
            <Link to={`/path/2`}>Link 2 </Link>
            <Link to={`/flag/1`}>Flag 1 </Link>
            <Link to={`/flag/2`}>Flag 2 </Link>
            <h1>welcome</h1>
            <content>
              <Route path='/' exact={true} component={() => {
                return '...'
              }} ></Route>
              <Route path='/path/:id' component={({ match }) => {
                return (
                  <h2>Link:[{match.params.id}]</h2>
                )
              }} />
              <Route path='/flag/:name' component={Flag} />
            </content>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const Flag = ({ match }) => {
  return (
    <React.Fragment>
      <h3>url:{match.url}</h3>
      <h2>flag:[{match.params.name}]</h2>
    </React.Fragment>
  )
}

export default Demo1;
