import { useContext, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import {Navbar} from "../components/Navbar"
import { ThemeContext } from "../context/ThemeContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import DetailPage from "./DetailPage";
import { BottomNavbar } from "../components/BottomNavbar";

export default function Template(){
    let theme = useContext(ThemeContext)
    return (
        <div className={theme.color}>
            <div className="w-screen h-screen">
                <div className="flex w-full h-5/6 overflow-y-auto">
                    <Sidebar/> 
                    <div className="ml-60 w-full h-full">
                        <Navbar />
                        <div className="w-full h-full">
                            <BrowserRouter>
                            <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/:id' element={<DetailPage/>}></Route>
                            <Route path='/favorite' element={<Favorites/>}></Route>
                            <Route path='/favorite/:id' element={<Favorites/>}></Route>
                            </Routes>
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
                <BottomNavbar/>
            </div>
        </div>
    )
}