import React, { Component } from 'react';
import CtrlPanel from '../Components/CtrlPanel';
import DisplayPic from '../Components/DisplayPic';
import PicInfo from '../Components/PicInfo';
import { requestAPI } from '../utils/requestAPI.js';
import './HomePage.css';

class HomePage extends Component {
  state = {
    data: {
      pid: "",
      p: "",
      uid: "",
      title: "",
      author: "",
      width: "",
      height: "",
      tags: [],
      urls: {},
    },
  }

  sendRequest = async (args) => {
    const resp = await requestAPI(args);
    this.setState({ data: resp.data.data[0] });
  }

  render() {
    return (
      <div className="card mt-3 div-homepage">
        <div className="card-header">不可以涩涩</div>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <CtrlPanel sendRequest={this.sendRequest} />
              <PicInfo data={this.state.data} />
            </div>
            <div className="col-xl-8 col-lg-6">
              <DisplayPic data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;