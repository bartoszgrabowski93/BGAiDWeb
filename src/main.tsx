import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.tsx";
import Head from "./Components/Head.tsx";
import Footer from "./Components/Footer.tsx";
import Nav from "./Components/Nav.tsx";
import Architektura from "./Components/Architektura.tsx";
import Kontakt from "./Components/Kontakt.tsx";
import Wnetrza from "./Components/Wnetrza.tsx";
import Ogrody from "./Components/Ogrody.tsx";
import Wzornictwo from "./Components/Wzornictwo.tsx";
import Oferta from "./Components/Oferta.tsx";
import "./Styles/Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <header>
          <Head />
        </header>
        <nav>
          <Nav />
        </nav>
        <body>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route
                path="/oferta/"
                element={
                  <>
                    <Oferta />
                  </>
                }
              />
              <Route
                path="/architektura/"
                element={
                  <>
                    <Architektura />
                  </>
                }
              />
              <Route
                path="/wnetrza/"
                element={
                  <>
                    <Wnetrza />
                  </>
                }
              />
              <Route
                path="/ogrody/"
                element={
                  <>
                    <Ogrody />
                  </>
                }
              />
              <Route
                path="/wzornictwo/"
                element={
                  <>
                    <Wzornictwo />
                  </>
                }
              />
              <Route
                path="/kontakt/"
                element={
                  <>
                    <Kontakt />
                  </>
                }
              />
            </Routes>
          </div>
        </body>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
