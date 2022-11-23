import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <HomePage />
        </div>
      </React.Fragment>
    );
  }
}

export default App;