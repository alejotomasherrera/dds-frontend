import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio";
import ArticulosFamilias from "./components/ArticulosFamilias";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="divBody">
            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
              <Route path="*" element={<Navigate to="/Inicio" replace />} />
              </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
