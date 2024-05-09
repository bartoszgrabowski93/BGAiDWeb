import React from "react";
import "../Styles/Style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <div>
        <ul className="containerNav">
          <li>
            <Link to={"/"} className="linkNavbar">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/oferta/"} className="linkNavbar">
              Oferta
            </Link>
          </li>
          <li>
            <Link to={"/architektura/"} className="linkNavbar">
              Architektura
            </Link>
          </li>
          <li>
            <Link to={"/wnetrza/"} className="linkNavbar">
              Wnetrza
            </Link>
          </li>
          <li>
            <Link to={"/ogrody/"} className="linkNavbar">
              Ogrody
            </Link>
          </li>
          <li>
            <Link to={"/wzornictwo/"} className="linkNavbar">
              Wzornictwo
            </Link>
          </li>
          <li>
            <Link to={"/kontakt/"} className="linkNavbar">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Nav;
