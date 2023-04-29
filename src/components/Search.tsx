import React, { useContext, useRef, useState, createContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

export function Search(){

    const {setSearchTerm} = useContext(SearchContext);

    const handleSearch = (e: any) =>{
        setSearchTerm(e.target.value)
    }

    return (
        <input type="text" placeholder="Search"onChange={handleSearch}className="rounded-full px-5 py-2 w-64 lg:w-80 xl:w-96 focus:outline-none focus:shadow-outline"/>
    )
}