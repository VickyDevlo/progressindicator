import React from "react";

import "./Icons.css";

const Icons = ({ children, variant }) => {
  return (
    <>
      <div className="Line"></div>
      <div className="childWrapper">
        <ul className="iconBar"
          
        >
          <li className={`iconList ${variant}`}  >{children}</li>
        </ul>
      </div>
    </>
  );
};

export default Icons;
