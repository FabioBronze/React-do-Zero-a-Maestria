import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContent";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("Contexto nao encontrado");
  }
  return context;
};
