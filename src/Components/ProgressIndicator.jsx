import React from "react";
import "./ProgressIndicator.css";

const ProgressIndicator = () => {
  const DataList = [
    {
      name: "Erik Erickson",
      Descnation: "Initial Requester",
    },
    {
      name: "Sally Summers",
      Descnation: "Supervisor",
    },
    {
      name: "Matthew Devaney",
      Descnation: "Manager",
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
              <li className="label">{item.Descnation}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
