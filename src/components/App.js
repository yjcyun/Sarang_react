

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MainPage from './MainPage/main-content-div2/MainPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/portfolio' component={MainPage} />
        </div>
      </Router>

    )
  }

}

export default App;