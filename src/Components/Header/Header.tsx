import React from "react";
import Search from "./Search";
import "../../styles/Header/Header.scss";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} />
          <span>STATISTIC</span>
        </div>
        <Search />
      </div>
    </header>
  );
};

export default Header;
