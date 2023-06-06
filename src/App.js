import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { ArticulosFamilias } from "./components/ArticulosFamilias";
import { Articulos } from "./components/articulos/Articulos";
import  ModalDialog  from "./components/ModalDialog";

function App() {
  return (
    <>
      <BrowserRouter>
      <ModalDialog/>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
            <Route path="/articulos" element={<Articulos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
