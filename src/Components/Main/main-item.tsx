import { useState } from "react";
import "../../styles/main/main-item.scss";
import Popup from "./popup";
const MainItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const openCheck = () => {
    if (!props.style) open ? setOpen(false) : setOpen(true);
  };
  return (
    <div className="mainItem" style={props.style} onClick={openCheck}>
      <div className="number">
        {!props.style ? Number(props.index) + 1 : "№"}
      </div>
      <div className="country">{props.Country}</div>
      <div className="stats">{props.TotalConfirmed}</div>
      {open ? <Popup {...props} openCheck={openCheck} /> : ""}
    </div>
  );
};

export default MainItem;
