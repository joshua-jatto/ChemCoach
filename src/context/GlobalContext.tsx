import { ReactNode, useState, createContext, useContext } from "react";
import { findMentor } from "../utilities/types";

// Define the shape of the context value
interface GlobalContextValue {
  // Define your context value's type here
  
  searched:  findMentor[] | null
  setSearched: ([])=>[]
  // Add more properties as needed
}

const globalContextValue: GlobalContextValue = {
  searched: [],
  setSearched:()=>[]

}
const globalContext = createContext(globalContextValue);

// Define the props for the provider component
interface GlobalContextProviderProps {
  children: ReactNode;
}

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [searched, setSearched] = useState<findMentor[] | null>();

  const value:any = { searched, setSearched };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(globalContext);
}
