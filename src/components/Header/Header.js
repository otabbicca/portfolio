import React from "react";
import { Adinkra } from "react-adinkra"
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
        <div className="header-container mhead">
        <div className="header">
          <img className="headPic" src="/img/hs_okt.jpg"/>
          <h1>Omar Tabbicca</h1>
          <Adinkra className="adinkra" name={'nea-onnim-no-sua-a-oh'}/>
          <h3></h3>
        </div>
      </div>
    )
  }
};

export default Header;
