import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useContext } from "react";
import { Link } from "react-router-dom";
import { arrayBuffer } from "stream/consumers";
import { FavoriteContext } from "../../context/FavoriteContext";
import { Music } from "../Music";
import { CardFavorite } from "./CardFavorite";
import { CardImage } from "./CardImage";

interface CardContainerProps{
    id: string;
    title: string;
    image: string;
    index: number;
    album: string;
    artist: string;
    url: string;
}


interface CardTitle{
    title: string;
    artist: string;
}


export function CardContainer({id, image, title, index, album, artist, url}: CardContainerProps){

    return (
        <div className="bg-gray-900 rounded-xl my-5 hover:bg-gray-600 w-full h-20">
            <Link className="group flex justify-start items-center py-2 h-full w-full" to={`/${id}`}>
                <div className="flex justify-center items-center w-5/6 sm:w-7/12 md:w-5/6 text-white ">
                    <div className="flex flex-wrap gap-2 justify-start items-center w-full px-2 ">
                        <div className="hidden md:block w-14">
                            <div className="flex justify-center items-center w-full h-full">
                                <h1 className="group-hover:hidden w-full h-full flex justify-center items-center">{index+1}</h1>
                                <Music id={id} title={title} artist={artist} image={image} url={url} currSong={url}/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-14 h-20">
                                <CardImage src={image}/>
                            <div className="md:hidden">
                                <Music id={id} title={title} artist={artist} image={image} url={url} currSong={url}/>
                            </div>
                        </div>
                        <CardTitle title={title} artist={artist}/>
                    </div>
                </div>
                <div className="hidden sm:flex z-2 justify-start items-center sm:w-3/12 md:w-1/3 lg:w-1/3 h-full text-gray-300 overflow-hidden whitespace-nowrap">
                    {album}
                </div>
                <CardFavorite id={id}/>
            </Link>
        </div>
    )
}


export function CardTitle({title, artist}: CardTitle){
    return (
        <div className="flex flex-col justify-between py-2 w-8/12 sm:w-3/4 md:w-4/6 lg:w-3/4 h-1/2">
            <h1 className="text-base font-semibold overflow-hidden whitespace-nowrap">{title}</h1>
            <h1 className="text-sm font-bold text-gray-400">{artist}</h1>
        </div>
    )
}