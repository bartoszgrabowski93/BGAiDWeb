import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/MainPage.tsx";
import Head from "./Components/Head.tsx";
import Footer from "./Components/Footer.tsx";
import Nav from "./Components/Nav.tsx";
import "./Style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Head />;
    <Nav />;
    <App />;
    <Footer />;
  </React.StrictMode>
);
