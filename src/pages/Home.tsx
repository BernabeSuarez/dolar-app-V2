import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="h-screen">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-300 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Cotizacion actualizada <br className="hidden lg:block" />
                de los valores del Dolar en Argentina
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                Los valores se actualizan en distintos horarios y siempre acorde
                a la cotización en cuestión. De todas formas, todos los valores
                se establecen en horarios bancarios y del mercado porque es
                justamente cuando fluctúan, caso contrario son estáticos.
              </p>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <Link to="/cotizaciones">
                    <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-600 lg:px-10 rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                      Ver las cotizaciones
                    </button>
                  </Link>
                </div>
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                  <Link to="/calculadora">
                    <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-cyan-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Ir a la calculadora
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
