import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { ArticulosFamilias } from "./components/ArticulosFamilias";
import { Articulos } from "./components/articulos/Articulos";
import ModalDialog from "./components/ModalDialog";
import Login from "./components/login/login";
import {ArticulosJWT} from "./components/articulosJWT/ArticulosJWT";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalDialog />

        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route
              path="/articulosjwt"
              element={
                <RequireAuth>
                  <ArticulosJWT />
                </RequireAuth>
              }
            />
            <Route path="/login/:componentFrom" element={<Login />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
