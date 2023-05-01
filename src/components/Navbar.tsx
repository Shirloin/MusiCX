import React, { useContext, useRef, useState, createContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import {Search} from '../components/Search'
import { Menu } from "./Menu";

interface NavbarProps{
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function Navbar({isVisible, setIsVisible}: NavbarProps){

    const {setSearchTerm} = useContext(SearchContext);
    

    const handleSearch = (e: any) =>{
        setSearchTerm(e.target.value)
    }

    const handleBar = (e:any)=>{
        setIsVisible(true)
    }   

    return (
        <div className="relative flex justify-center items-center h-20 py-5 z-10 bg-black w-full">
            <div className="fixed lg:sticky top-0 flex justify-between xl:justify-end items-center w-full px-5 xl:px-16 bg-black">
                <div className="flex justify-center items-center text-white text-3xl w-10 xl:hidden sm:block py-5 px-2">
                    <i className="fas fa-bars hover:cursor-pointer" onClick={handleBar}></i>
                </div>
                <div className="flex justify-center items-center">
                    <Search/>
                </div>
            </div>
        </div>
    )
}