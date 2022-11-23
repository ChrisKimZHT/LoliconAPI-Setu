import React, { Component } from 'react';
import CtrlPanel from '../Components/CtrlPanel';
import DisplayPic from '../Components/DisplayPic';
import PicInfo from '../Components/PicInfo';
import './HomePage.css';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div className="card mt-3 div-homepage">
        <div className="card-header">可以涩涩</div>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <CtrlPanel />
              <PicInfo />
            </div>
            <div className="col-xl-8 col-lg-6">
              <DisplayPic />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;