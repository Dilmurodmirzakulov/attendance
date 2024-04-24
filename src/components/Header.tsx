import React from "react";
import logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wu-header">
          <a href="#">
            <img className="wu-logo" src={logo} alt="" />
          </a>
          <h1 className="wu-page-title">Attendance System</h1>
        </div>
        <nav className="wu-navbar light">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link pl-0" href="#">
                Attendance Management
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li>
          </ul>
          <div className="wu-user-actions">
            <a href="#" className="wu-user">
              <i className="fa-solid fa-user"></i> akhalikov
            </a>
            <a href="#" className="wu-logout">
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
