// import { useDolar } from "../context/useDolar";
import Spinner from "../components/Spinner";
import { useState } from "react";

export default function Convertidor() {
  const dolar = JSON.parse(localStorage.getItem("cotizaciones"));
  const [loading, setLoading] = useState<boolean>(true);
  const [dolares, setDolares] = useState<string>("");
  const [convert, setConvert] = useState<number>(0);
  const dolarOficial: number = dolar[0].venta;

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const dolarConvert = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setConvert(parseFloat(dolares) * dolarOficial);
  };

  if (loading) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="h-screen items-center justify-center ">
      <h2>Dolar Oficial: $ {dolarOficial}</h2>
      <form className="w-full max-w-4xl m-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dolar"
            >
              Dolares
            </label>
            <input
              id="dolar"
              type="number"
              placeholder="Ingrese un monto en Dolares"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              aria-label="Full name"
              value={dolares}
              onChange={(e) => setDolares(e.target.value)}
            />
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={(e) => dolarConvert(e)}
            >
              Convertir
            </button>
          </div>
        </div>
      </form>
      <h2>
        $ {dolares} dolares equivalen a: $ {convert.toFixed(2)} Pesos
      </h2>
    </div>
  );
}
