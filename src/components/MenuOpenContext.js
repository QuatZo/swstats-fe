import { createContext, useContext } from "react";

export const MenuOpenContext = createContext();

export function useMenuOpen() {
  return useContext(MenuOpenContext);
}
