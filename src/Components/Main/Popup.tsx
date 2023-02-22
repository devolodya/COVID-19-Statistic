import "../../styles/main/popup.scss";
import confirmed from "../../images/confirmed.svg";
import deaths from "../../images/deaths.svg";
import recovered from "../../images/recovered.svg";

const Popup = (props: any) => {
  return (
    <div className="popup">
      <div className="popupBody" onClick={(e) => e.stopPropagation()}>
        <div className="country">{props.Country}</div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={confirmed} alt="confirmed" />
            Total Confirmed:
          </div>
          {props.TotalConfirmed}
        </div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={deaths} alt="deaths" />
            Total Deaths:
          </div>
          {props.TotalDeaths}
        </div>
        <div className="stats">
          <div className="statsleftSide">
            <img src={recovered} alt="recovered" />
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
