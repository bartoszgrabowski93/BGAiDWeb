import React from "react";
import "../Styles/Style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>
            <Link to={"/"} className="NaviButton">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/oferta/"} className="NaviButton">
              Oferta
            </Link>
          </li>
          <li>
            <Link to={"/architektura/"} className="NaviButton">
              Architektura
            </Link>
          </li>
          <li>
            <Link to={"/wnetrza/"} className="NaviButton">
              Wnetrza
            </Link>
          </li>
          <li>
            <Link to={"/ogrody/"} className="NaviButton">
              Ogrody
            </Link>
          </li>
          <li>
            <Link to={"/wzornictwo/"} className="NaviButton">
              Wzornictwo
            </Link>
          </li>
          <li>
            <Link to={"/kontakt/"} className="NaviButton">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Nav;
