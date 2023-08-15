import { createContext, useState, useEffect } from "react";
import { IDolar } from "../interfaces/dolar";

export const DolarContext = createContext<IDolar[] | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const DolarProvider = ({ children }: Props) => {
  const [cotizacionDolar, setCotizacionDolar] = useState<IDolar[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      await fetch("https://dolar-api-argentina.vercel.app/v1/dolares")
        .then((res) => res.json())
        .then((data) => setCotizacionDolar(data));
    };
    dataFetch();
    localStorage.setItem("cotizaciones", JSON.stringify(cotizacionDolar));
  }, [cotizacionDolar]);

  return (
    <DolarContext.Provider value={cotizacionDolar}>
      {children}
    </DolarContext.Provider>
  );
};
