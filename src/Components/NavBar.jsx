import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#E9ECEF" }}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <span>Lolicon API 请求器</span>
        </div>
        <span className="fw-light float-end">By ChrisKim</span>
      </div>
    </nav >
  );
}

export default NavBar;