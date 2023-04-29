import { createContext, useState } from "react";

export const THEME = {
    light:{
        color : "fixed w-screen h-screen z-10 bg-gray-50"
    },
    dark:{
        color: "fixed w-screen h-screen z-10 bg-slate-950"
    },
    blur:{
        color: "fixed w-screen h-screen z-5 bg-opacity-50 backdrop-blur-xl"
    }
}

export const ThemeContext = createContext(THEME.dark);