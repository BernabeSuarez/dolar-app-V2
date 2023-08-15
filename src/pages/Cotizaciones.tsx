import { useDolar } from "../context/useDolar";
import DolarCard from "../components/Card";

export default function Cotizaciones() {
  const dolar = useDolar();
  return (
    <div className="grid grid-cols-3 gap-6 p-6 h-screen">
      {dolar?.map((dolar) => (
        <DolarCard
          key={dolar.nombre}
          compra={dolar.compra}
          venta={dolar.venta}
          casa={dolar.casa}
          nombre={dolar.nombre}
          fechaActualizacion={dolar.fechaActualizacion}
        />
      ))}
    </div>
  );
}
