import React, { Component } from 'react';
import CtrlPanel from '../Components/CtrlPanel';
import DisplayPic from '../Components/DisplayPic';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header">可以涩涩</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <CtrlPanel />
            </div>
            <div className="col-md-6">
              <DisplayPic />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;