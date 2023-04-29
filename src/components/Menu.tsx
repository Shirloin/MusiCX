import {useContext, useState, useRef, useEffect} from 'react'
import { ThemeContext } from '../context/ThemeContext'

interface MenuProps{
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export function Menu({isVisible, setIsVisible}: MenuProps){
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        const handleClickOutside = (e:any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisible(false)
              e.stopPropagation();
            }
          };
        if(isVisible){
            window.addEventListener('click', handleClickOutside, {capture:true})
        }
        else{
            window.removeEventListener('click', handleClickOutside, {capture: true})
        }
        return ()=>{
            window.removeEventListener('click', handleClickOutside, {capture: true})
        }
    }, [isVisible])

    return (
        <div ref={ref} className="absolute top-0 h-72 w-screen block justify-center items-center z-10 text-white">
            <div className='bg-black w-full h-full'>
                <div className="w-full h-1/3 flex justify-center items-center border-b border-gray-600">
                    <a href="/" >
                        <img src={process.env.PUBLIC_URL+'/logo.png'} alt="" />
                    </a>
                </div>
                <div className="w-full h-1/3 flex justify-center items-center border-b border-gray-600">
                    <a href="/" className="flex flex-wrap gap-4 items-center text-4xl">Home</a>
                </div>
                <div className="w-full h-1/3 flex justify-center items-center border-b border-gray-600">
                    <a href="/favorite" className="flex flex-wrap gap-4 items-center text-4xl">Favorite</a>
                </div>
            </div>
        </div>
    )
}