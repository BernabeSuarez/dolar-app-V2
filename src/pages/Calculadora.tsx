export default function Calculadora() {
  return (
    <div className="h-screen items-center justify-center ">
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
            />
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Convertir
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
