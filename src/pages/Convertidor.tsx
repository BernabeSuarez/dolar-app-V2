// import { useDolar } from "../context/useDolar";
import Spinner from "../components/Spinner";
import { useState } from "react";

export default function Convertidor() {
  const dolar = JSON.parse(localStorage.getItem("cotizaciones"));
  const [loading, setLoading] = useState<boolean>(true);
  const [dolares, setDolares] = useState<string>("");
  const [convert, setConvert] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);
  const dolarOficial: number = dolar[0].venta;

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const dolarConvert = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setConvert(parseFloat(dolares) * dolarOficial);
    setResult(true);
  };

  if (loading) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="md:container justify-center  md:mx-auto p-6 h-screen items-center ">
      <h2 className="text-center">Dolar Oficial: $ {dolarOficial}</h2>
      <form className="w-full max-w-4xl m-auto justify-center items-center">
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
              className="shadow bg-cyan-600 lg:px-10 rounded-md hover:bg-cyan-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"
              type="button"
              onClick={(e) => dolarConvert(e)}
            >
              Convertir
            </button>
          </div>
        </div>
      </form>
      {result ? (
        <h2 className="text-center">
          $ {dolares} dolares equivalen a: $ {convert.toFixed(2)} Pesos
        </h2>
      ) : null}
    </div>
  );
}
