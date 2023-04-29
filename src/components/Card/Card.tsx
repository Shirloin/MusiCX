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
        <div className="bg-gray-900 rounded-xl my-5 hover:bg-gray-600 w-full">
            <Link className="group flex justify-between items-center py-2 h-full w-full" to={`/${id}`}>
                <div className="flex justify-center items-center w-5/12 text-white">
                    <div className="flex justify-center items-center w-1/6 h-full">
                        <h1 className="group-hover:hidden">{index+1}</h1>
                        <Music id={id} title={title} artist={artist} image={image} url={url}/>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-start items-center w-5/6">
                        <div className="flex justify-center items-center w-1/6">
                            <CardImage src={image}/>
                        </div>
                        <CardTitle title={title} artist={artist}/>
                    </div>
                </div>
                <div className="flex justify-center items-center w-5/12 h-full text-gray-300">
                    <div className="flex justify-start items-center w-4/6">
                        {album}
                    </div>
                    <CardFavorite id={id}/>
                </div>
            </Link>
        </div>
    )
}


export function CardTitle({title, artist}: CardTitle){
    return (
        <div className="relative flex flex-col justify-between py-2 w-4/6 h-1/2">
            <h1 className="text-base font-semibold">{title}</h1>
            <h1 className="text-sm font-bold text-gray-400">{artist}</h1>
        </div>
    )
}