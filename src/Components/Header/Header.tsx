import Search from "./search";
import "../../styles/header/header.scss";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>STATISTIC</span>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
