import React, { useContext, useRef, useState, createContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import {Search} from '../components/Search'

export function Navbar(){

    const {setSearchTerm} = useContext(SearchContext);

    const handleSearch = (e: any) =>{
        setSearchTerm(e.target.value)
    }

    return (
        <div className="relative flex justify-center items-center h-20 px-5 py-5 z-10 bg-black w-full">
            <div className="sticky top-0 flex items-center h-full w-full">
                {/* <div className="flex flex-wrap gap-5 text-white text-xl w-full">
                    <a href="" className="flex justify-center items-center rounded-full bg-gray-600 w-10 h-10">
                        <i className="fas fa-chevron-left"></i>
                    </a>
                    <a href="" className=" flex justify-center items-center rounded-full bg-gray-600 w-10 h-10">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div> */}
                <div className="flex justify-end align-items-center w-full">
                    <Search/>
                </div>
            </div>
        </div>
    )
}