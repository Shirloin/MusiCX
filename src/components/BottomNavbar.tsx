import { SongContext } from "../context/SongContext";
import { CardImage } from "./Card/CardImage";
import {useContext} from 'react'
import { Link } from "react-router-dom";
import React from 'react'

interface BottomNavbarProps{
    id: string;
    title: string;
    image: string;
    index: number;
    album: string;
    artist: string;
    url: string;
}

export function BottomNavbar(){

    const {song, setSong} = useContext(SongContext)
    const isPlaying = ()=>{
        if(song.id==='')return false
        return true
    }

    return(
        <div className="fixed bg-neutral-900 w-full h-1/6 bottom-0 flex justify-start items-center">
            <div className="p-10 flex items-center absolute">
                <div className="flex items-center w-20">
                    <CardImage src={song.image}/>
                </div>
                <div className="text-white w-96">
                    <div className="relative flex flex-col justify-between py-2 w-full h-1/2">
                        <a href={`/${song.id}`} className="font-semibold hover:underline text-primary-500" >{song.title}</a>
                        <h1 className="text-sm font-bold text-gray-400">{song.artist}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full text-white">
                <audio className="" src={song.url} autoPlay={isPlaying()} controls>
                </audio>
            </div>
        </div>
    )
}