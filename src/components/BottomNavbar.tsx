import { SongContext } from "../context/SongContext";
import { CardImage } from "./Card/CardImage";
import {useContext, useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import React from 'react'
import Marquee from "react-fast-marquee";

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
        if(song.currSong==='')return false
        return true
    }

    const onPause = ()=>{
        setSong({
            id: song.id,
            title: song.title,
            artist: song.artist,
            image: song.image,
            url: song.url,
            currSong: ''})
    }

    const onPlay = ()=>{
        setSong({
            id: song.id,
            title: song.title,
            artist: song.artist,
            image: song.image,
            url: song.url,
            currSong: song.url})
    }


    return(
        <div className="fixed bg-neutral-900 w-full h-1/6 bottom-0 flex justify-between items-center">
            <div className="p-5 flex items-center">
                <div className="flex items-center w-20">
                    <CardImage src={song.image}/>
                </div>
                <div className="text-white w-7/12 sm:w-1/2">
                    <div className="flex flex-col justify-between py-2 w-full h-1/2">
                        <Marquee>
                            <a href={`/${song.id}`} className="font-semibold hover:underline text-primary-500" >{song.title} </a>
                        </Marquee>
                        <h1 className="text-sm font-bold text-gray-400">{song.artist}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full text-white sm:w-1/4 p-5">
                <audio className="w-full" src={song.currSong} onEnded={onPause} onLoad={onPlay} onPlay={onPlay} onPause={onPause} autoPlay={isPlaying()} controls>
                </audio>
            </div>
        </div>
    )
}