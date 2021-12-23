import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./UserInfo.css";

export const UserInfo = (props) => {
  return (
    <div className="block">
      <FontAwesomeIcon icon={props.icon} className="icon" />
      <div className="info">
        <span className="main-info">{props.text}</span>
        <span className="header-info">{props.title}</span>
      </div>
    </div>
  );
};
