import React, { useState } from "react";
import "./ProgressIndicator.css";

const ProgressIndicator = ({ clickHandler, active }) => {
  const DataList = [
    {
      id: 1,
      name: "Erik Erickson",
      Designation: "Initial Requester",
    },
    {
      id: 2,
      name: "Sally Summers",
      Designation: "Supervisor",
    },
    {
      id: 3,
      name: "Matthew Devaney",
      Designation: "Manager",
    },
    {
      id: 4,
      name: "Executive Team",
    },
  ];

  return (
    <div className="container">
      {DataList.map((item) => {
        return (
          <div key={item.id} className="Wrapper">
            <ul className="ProgressBar">
              <li onClick={() => clickHandler(item.id)}>{item.name}</li>
              <li className="label">{item.Designation}</li>
            </ul>

            <div className="checkBoxWrapper">
              {active >= item.id ? <div className="innerbox"></div> : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
