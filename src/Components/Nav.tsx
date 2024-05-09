import React from "react";
import "../Styles/Style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <div className="containerNav">
        <ul>
          <li className="NaviButton">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="NaviButton">
            <Link to={"/oferta/"}>Oferta</Link>
          </li>
          <li className="NaviButton">
            <Link to={"/architektura/"}>Architektura</Link>
          </li>
          <li className="NaviButton">
            <Link to={"/wnetrza/"}>Wnetrza</Link>
          </li>
          <li className="NaviButton">
            <Link to={"/ogrody/"}>Ogrody</Link>
          </li>
          <li className="NaviButton">
            <Link to={"/wzornictwo/"}>Wzornictwo</Link>
          </li>
          <li className="KontaktButton">
            <Link to={"/kontakt/"}>Kontakt</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Nav;
