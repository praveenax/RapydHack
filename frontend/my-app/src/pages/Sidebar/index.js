import React from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/images/occupay-logo.png";

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} width="100%" height="100%" alt="" />
        </div>
        <div className="flex flex-col">
          <NavLink
            to="/dashboard"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/library"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            <span>Library</span>
          </NavLink>
          <NavLink
            to="/explore"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            <span>Explore</span>
          </NavLink>
          <NavLink
            to="/wallet"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            <span>Wallet</span>
          </NavLink>
          <NavLink
            to="/earning"
            exact
            activeClassName="active-link"
            className="nav-link"
          >
            <span>Earning</span>
          </NavLink>
        </div>
      </div>
    );
}

export default Sidebar;