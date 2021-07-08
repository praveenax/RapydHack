import React from 'react';
// import { NavLink } from "react-router-dom";
import profileIcon from '../../assets/images/profile-icon.png';
import logoutIcon from '../../assets/images/logout-icon.png';

// import Logo from "../../assets/images/occupay-logo.png";

const Topbar = () => {
    let userName = localStorage.getItem('usertype')
    return (
        <div className="header flex">
        <div className="profile-section flex items-center">
          <img src={profileIcon} width="24px" alt="" />
          <p>{userName}</p>
        </div>
        <div className="logout flex items-center">
          <img src={logoutIcon} width="20px" alt="" />
          <p>Logout</p>
        </div>
      </div>
        );
}

export default Topbar;