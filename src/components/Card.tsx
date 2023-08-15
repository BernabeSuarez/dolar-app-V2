import { IDolar } from "../interfaces/dolar";
import "../index.css";

export default function DolarCard(dolar: IDolar) {
  console.log(dolar);
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-2xl font-bold underline">{dolar.nombre}</h2>
      <div className="flex flex-row space-x-4 items-center">
        <div id="temp">
          <h4 className="text-xs">Venta: </h4>
          <p className="text-md text-gray-500">$ {dolar.venta}</p>
          <h4 className="text-xs">Compra: </h4>
          <p className="text-md text-gray-500">$ {dolar.compra}</p>
          <p className="text-xs text-gray-500">
            Actualizado: {dolar.fechaActualizacion}
          </p>
        </div>
      </div>
    </div>
  );
}
