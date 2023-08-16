import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="border-gray-200 mb-10 px-8 py-4">
        <div className="w-full mx-auto">
          <div className="mx-2 flex flex-wrap items-center justify-between">
            <Link to="/" className="flex">
              <img src="public/favicon.png" alt="Icon" className="mx-4" />
              <span className="self-center text-lg font-semibold whitespace-nowrap">
                Dolar Hoy
              </span>
            </Link>

            {/* Mobile Menu */}
            {show ? (
              <div className=" z-20 w-screen h-full bg-gray-700 rounded-md p-4">
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <Link
                      to="/cotizaciones"
                      onClick={() => setShow(!show)}
                      className="text-sm hover:bg-gray-100 text-gray-500 block px-4 py-2"
                    >
                      Cotizaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/convertidor"
                      onClick={() => setShow(!show)}
                      className="text-sm hover:bg-gray-100 text-gray-500 block px-4 py-2"
                    >
                      Convertidor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/calculadora"
                      className="text-sm hover:bg-gray-100 text-gray-500 block px-4 py-2"
                      onClick={() => setShow(!show)}
                    >
                      Calculadora
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
            <div className="flex md:hidden md:order-2">
              <button onClick={() => setShow(!show)}>menu</button>
            </div>
            <div
              className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link
                    to="/cotizaciones"
                    className="bg-gray-500 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-gray-500 md:p-0 rounded"
                  >
                    Cotizaciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/convertidor"
                    className="text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Convertidor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calculadora"
                    className="text-gray-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Calculadora
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
