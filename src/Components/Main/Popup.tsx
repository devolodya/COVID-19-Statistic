import React from "react";
import "../../styles/Main/Popup.scss";
import confirmedIcon from "../../images/confirmedIcon.svg";
import deathsIcon from "../../images/deathsIcon.svg";
import recoveredIcon from "../../images/recoveredIcon.svg";
const Popup = (props: any) => {
  return (
    <div className="popup">
      <div className="popupBody" onClick={(e) => e.stopPropagation()}>
        <div className="country">{props.Country}</div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={confirmedIcon} />
            Total Confirmed:
          </div>
          {props.TotalConfirmed}
        </div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={deathsIcon} />
            Total Deaths:
          </div>
          {props.TotalDeaths}
        </div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={recoveredIcon} />
            Total Recovered:
          </div>
          {props.TotalRecovered}
        </div>
        <button onClick={props.openCheck}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
