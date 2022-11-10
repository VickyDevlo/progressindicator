import React from "react";
import "./Icons.css";
import { BiUser } from "react-icons/bi";

const Icons = ({ children }) => {
    
  const userIcon = <BiUser size={25} />;

  const Json = [
    {
      icon: userIcon,
    },
    {
      icon: userIcon,
    },
    {
      icon: userIcon,
    },
    {
      icon: userIcon,
    },
  ];
  return (
    <div className="iconWrapper">
      <div className="Line"></div>
      <div className="childWrapper">
        {Json.map((list, i) => {
          return (
            <ul className="iconBar" key={i}>
              <li className="iconList">{list.icon}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Icons;
