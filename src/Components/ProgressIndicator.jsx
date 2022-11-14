import React, { useState } from "react";
import "./ProgressIndicator.css";

const ProgressIndicator = ({ variant }) => {
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

  const [active, setActive] = useState(1);

  const onClickHandler = (id) => {
    setActive(id);
  };

  return (
    <div className={`${variant}`}>
      {DataList.map((item) => {
        return (
          <div key={item.id}>
            <div className="box" onClick={() => onClickHandler(item.id)}>
              <div
                className={active >= item.id ? "activeBox" : "inactiveBox"}
              />
            </div>

            <div>
              <ul className="progressBar">
                <li>{item.name}</li>
                <li className="label">{item.Designation}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ProgressIndicator.defaultProps = {
  variant: "horizontal",
};
export default ProgressIndicator;
