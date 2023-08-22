import React, { Component } from 'react';
class CtrlPanel extends Component {
  state = {
    tag: "",
    uid: "",
    size: "original",
    r18: false,
  }

  inputTagChange = (val) => {
    this.setState({ tag: val.target.value });
  }

  inputUidChange = (val) => {
    this.setState({ uid: val.target.value });
  }

  inputSizeChange = (val) => {
    this.setState({ size: val.target.value });
  }

  inputR18Change = (val) => {
    this.setState({ r18: val.target.checked });
  }

  connectArgs = () => {
    let args = "";
    if (this.state.tag.length) {
      let tagList = this.state.tag.split(' ');
      for (let tag of tagList) {
        args += `&tag=${encodeURIComponent(tag)}`;
      }
    }
    if (this.state.uid.length) {
      args += `&uid=${encodeURIComponent(this.state.uid)}`;
    }
    args += `&size=${encodeURIComponent(this.state.size)}`;
    args += `&r18=${this.state.r18 ? "1" : "0"}`;
    args += `&proxy=${window.Config.imgURL}`
    return args.substring(1);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span className="h3">控制面板</span>
          <span className="fw-light ms-2">请在此处指定参数</span>
          <button type="button" className="btn btn-sm btn-primary float-end" onClick={() => this.props.sendRequest(this.connectArgs())}>可以涩涩</button>
        </div>
        <hr />
        <div className="input-group">
          <span className="input-group-text">标签</span>
          <input type="text" className="form-control" onChange={this.inputTagChange} value={this.state.tag} />
        </div>
        <div className="input-group mt-2">
          <span className="input-group-text">作者</span>
          <input type="text" className="form-control" placeholder="输入 UID 可指定作者" onChange={this.inputUidChange} value={this.state.uid} />
        </div>
        <div className="input-group mt-2">
          <span className="input-group-text">规格</span>
          <select className="form-select" onChange={this.inputSizeChange} defaultValue={this.state.size}>
            <option value="original">原图 (Original)</option>
            <option value="regular">标准 (Regular)</option>
            <option value="small">较小 (Small)</option>
            <option value="thumb">缩略 (Thumb)</option>
            <option value="mini">迷你 (Mini)</option>
          </select>
        </div>
        <div className="form-check form-switch mt-2">
          <label className="form-check-label" htmlFor="is-r18">R18 模式</label>
          <input className="form-check-input" type="checkbox" role="switch" id="is-r18" onChange={this.inputR18Change} checked={this.state.r18} />
        </div>
      </React.Fragment>
    );
  }
}

export default CtrlPanel;