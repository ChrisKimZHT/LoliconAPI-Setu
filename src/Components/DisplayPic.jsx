import React from 'react';

const DisplayPic = (props) => {
  let url = "";
  for (let val of Object.values(props.data.urls)) {
    url = val;
  }
  return (
    <React.Fragment>
      <div>
        <span className="h3">响应结果</span>
        <span className="fw-light ms-2">图片显示在这啦</span>
      </div>
      <hr />
      <a href={url} target="_blank">
        <img src={url} className="div-picture rounded" alt={url}></img>
      </a>
    </React.Fragment>
  );
}

export default DisplayPic;