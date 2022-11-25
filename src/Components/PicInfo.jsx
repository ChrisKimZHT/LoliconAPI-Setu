import React from 'react';

const PicInfo = (props) => {
  return (
    <React.Fragment>
      <div className="mt-3">
        <span className="h3">图片详情</span>
        <span className="fw-light ms-2">图片详细信息</span>
      </div>
      <hr />
      <ul>
        <li>UID/PID(p)：{props.data.uid ? `${props.data.uid}/${props.data.pid}(p${props.data.p})` : ""}</li>
        <li>标题：{props.data.title}</li>
        <li>作者：{props.data.author}</li>
        <li>链接：<a href={`https://www.pixiv.net/artworks/${props.data.pid}`} target="_blank">{props.data.pid ? `www.pixiv.net/artworks/${props.data.pid}` : ""}</a></li>
        <li>尺寸：{props.data.width ? `${props.data.width} * ${props.data.height} (原图)` : ""}</li>
        <li>标签：{props.data.tags.join(", ")}</li>
      </ul>
    </React.Fragment>
  );
}

export default PicInfo;