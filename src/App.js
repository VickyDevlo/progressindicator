import { useState } from "react";
import "./App.css";
import Icons from "./Components/Icons";
import ProgressIndicator from "./Components/ProgressIndicator";
import { BiUser } from "react-icons/bi";
import { FcManager } from "react-icons/fc";
import { TbUsers } from "react-icons/tb";

function App() {
  const [active, setActive] = useState(0);

  const clickHandler = (id) => {
    console.log(id);
    setActive(id);
  };
  return (
    <div className="App">
      <div className="vartical">
        <div className="icon">
          <Icons >
            <BiUser size={25} />
          </Icons>

          <Icons>
            <BiUser size={25} />
          </Icons>

          <Icons variant="border">
            <FcManager size={25} />
          </Icons>

          <Icons>
            <TbUsers size={25} />
          </Icons>
        </div>
        <ProgressIndicator
          variant="vertical"
          clickHandler={clickHandler}
          active={active}
        />
      </div>
    </div>
  );
}

export default App;
