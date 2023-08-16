import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cotizaciones from "./pages/Cotizaciones";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Convertidor from "./pages/Convertidor";
import Calculadora from "./pages/Calculadora";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cotizaciones" element={<Cotizaciones />} />
            <Route path="/convertidor" element={<Convertidor />} />
            <Route path="/calculadora" element={<Calculadora />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
