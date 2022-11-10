import React from "react";
import "./ProgressIndicator.css";

const ProgressIndicator = () => {
  const DataList = [
    {
      name: "Erik Erickson",
      label: "Initial Requester",
    },
    {
      name: "Sally Summers",
      label: "Supervisor",
    },
    {
      name: "Matthew Devaney",
      label: "Manager",
    },
    {
      name: "Executive Team",
    },
  ];
  return (
    <div className="container">
      {DataList.map((item, index) => {
        return (
          <div key={index} className="Wrapper">
            <ul className="ProgressBar">
              <li>{item.name}</li>
              <li className="label">{item.label}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
