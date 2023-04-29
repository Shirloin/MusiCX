import { createContext } from "react";

export const THEME = {
    light:{
        color : "fixed w-screen h-screen z-10 bg-gray-50"
    },
    dark:{
        color: "fixed w-screen h-screen z-10 bg-slate-950"
    }
}

export const ThemeContext = createContext(THEME.dark);