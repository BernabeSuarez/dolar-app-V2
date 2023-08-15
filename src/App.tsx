import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cotizaciones from "./pages/Cotizaciones";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Convertidor from "./pages/Convertidor";
import Calculadora from "./pages/Calculadora";
// import { DolarProvider } from "./context/dolarContext";

function App() {
  return (
    <>
      {/* <DolarProvider> */}
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
      {/* </DolarProvider> */}
    </>
  );
}

export default App;
