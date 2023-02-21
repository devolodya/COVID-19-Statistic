import React, { useState } from "react";
import "../../styles/Main/MainItem.scss";
import Popup from "./Popup";
const MainItem = (props: any) => {
  const [open, setOpen] = useState(false);
  const openCheck = () => {
    if (!props.style) {
      open ? setOpen(false) : setOpen(true);
      console.log();
    }
  };
  return (
    <div className="mainItem" style={props.style} onClick={openCheck}>
      <div className="number">
        {!props.style ? Number(props.index) + 1 : "№"}
      </div>
      <div className="country">{props.Country}</div>
      <div className="stats">{props.TotalConfirmed}</div>
      {open ? <Popup {...props} /> : ""}
    </div>
  );
};

export default MainItem;
