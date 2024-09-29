import React from "react";
import "./LeftMenu.css"

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <ul>
        <li><a href="http://www.google.com">Home</a></li>
        <li><a href="http://www.facebook.com">About</a></li>
        <li><a href="https://www.google.com">Services</a></li>
        <li><a href="http://www.google.com">Contact</a></li>
      </ul>
    </div>
  );
};

export default LeftMenu;