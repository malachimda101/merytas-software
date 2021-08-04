import React, { Component } from "react";
import "../assets/styles/home/userProfile.css";
import blank_profile from "../assets/images/blank_profile.png";

interface UserProps {
    userName: string,
    lastName: string,
    firstName: string,
}


const UserProfile: React.FC<UserProps> = ({ userName, lastName, firstName }) => {
  return (
    <div className="user-profile">
      <div className="profile-img-container">
        <img className="profile-img" src={blank_profile}></img>
      </div>
      <div className="user-info">
        <div className="profile-name">{firstName + " " + lastName}</div>
        <div className="username">{"@" + userName}</div>
      </div>
    </div>
  );
};

export default UserProfile;
