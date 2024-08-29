import {createContext, useContext} from "react"


const globalContext = createContext(null)

const value:any = {}
export default function GlobalContextProvider({children}){
    return <globalContext.Provider value={value}>{children}</globalContext.Provider>
}

export function useGlobal(){
    return useContext(globalContext)
}