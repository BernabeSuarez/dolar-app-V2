import { useContext } from "react";
import { DolarContext } from "./dolarContext";

export const useDolar = () => {
  const context = useContext(DolarContext);
  return context;
};
