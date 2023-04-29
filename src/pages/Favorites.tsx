import { useQuery } from "@apollo/client";
import {useContext} from 'react';
import { CardContainer } from "../components/Card/Card";
import { FavoriteContext } from "../context/FavoriteContext";
import { SearchContext } from "../context/SearchContext";
import { GET_ALL_SONG } from "../queries/query";

export default function Favorites(){

    const {loading, error, data} = useQuery(GET_ALL_SONG);

    const {favorite} = useContext(FavoriteContext);
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

    return (
        <div className="px-5 w-full h-full">
            {
                allAlbums.map((album: any)=>{
                    return album.tracks.filter((track:any) => 
                    favorite.some((a)=>a === track.id)&& track.name.toLowerCase().includes(searchTerm.toLowerCase())).map((track: any) => {
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