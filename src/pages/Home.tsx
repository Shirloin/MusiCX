import { useQuery } from "@apollo/client";
import { CardContainer } from "../components/Card/Card";
import { GET_ALL_SONG } from "../queries/query";
import {useContext, useEffect, useState} from "react";
import { SearchContext } from "../context/SearchContext";
import { assertValidSDLExtension } from "graphql/validation/validate";


export default function Home(){
    const {loading, error, data} = useQuery(GET_ALL_SONG);

    const {searchTerm} = useContext(SearchContext);

    if(loading){
        return <h1 className="text-white">Loading...</h1>
    }
    else if(error){
        return <h1 className="text-white">Error: {error.message}</h1>
    }

    let count = 0;

    const allAlbums = data.a.albums.concat(data.b.albums).concat(data.c.albums).concat(data.d.albums).concat(data.e.albums);
    const allTracks = allAlbums.flatMap((album: any) => album.tracks);
    const filteredTracks = allTracks.filter((track: any) => track.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const shuffledTracks = filteredTracks.sort(() => Math.random() - 0.5);

    return (
        <div className="px-5 w-full h-full">
            {
                allAlbums.map((album: any)=>{
                    return album.tracks.filter((track:any) => 
                    track.name.toLowerCase().includes(searchTerm.toLowerCase())).sort(() => Math.random()-0.5).map((track: any) => {
                        return <CardContainer 
                            index={count++}
                            id={track.id}
                            title={track.name}
                            image={album.image}
                            album={album.name}
                            url={track.preview_url}
                            artist=
                                {[data.a, data.b, data.c, data.d, data.e].find(artist => artist.albums.includes(album))?.name}/>
                    })
                })
            }
        </div>
    )
}