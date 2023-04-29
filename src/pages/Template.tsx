import { useContext, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import {Navbar} from "../components/Navbar"
import { ThemeContext } from "../context/ThemeContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import DetailPage from "./DetailPage";
import { BottomNavbar } from "../components/BottomNavbar";
import { Menu } from "../components/Menu";

export default function Template(){
    let theme = useContext(ThemeContext)

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={theme.color}>
            <div className={isVisible?"block":"hidden"}>
                <Menu isVisible = {isVisible} setIsVisible = {setIsVisible}/>
            </div>
            <div className={isVisible?"sr-only":""}>
            <div className="max-w-screen-2xl w-screen h-screen">
                <div className="flex w-full h-5/6 overflow-y-auto">
                    <div className="hidden xl:block">
                        <Sidebar/> 
                    </div>
                    <div className="xl:ml-60 w-full h-full">
                        <Navbar isVisible = {isVisible} setIsVisible = {setIsVisible}/>
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
                </div>
                <BottomNavbar/>
            </div>
        </div>
    )
}