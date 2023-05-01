import { useParams } from "react-router-dom"
import {useContext} from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_SONG } from "../queries/query";
import { CardContainer } from "../components/Card/Card";
import { DetailContainer } from "../components/Detail";
import { assertListType } from "graphql";

export default function Detail(){
    let {id} = useParams();
    const {loading, error, data} = useQuery(GET_ALL_SONG);

    if(loading){
        return <h1 className="text-white">Loading...</h1>
    }
    else if(error){
        return <h1 className="text-white">Refresh Again</h1>
    }

    const allAlbums = data.a.albums.concat(data.b.albums).concat(data.c.albums).concat(data.d.albums).concat(data.e.albums);
    const allTracks = allAlbums.flatMap((album: any) => album.tracks);
    const filteredAlbums = allAlbums.filter((album:any)=>
        album.tracks.some((track:any) => track.id.includes(id))
    )
    
    const albumId = filteredAlbums.map((album:any) => album.id);
    const trackInAlbum = allTracks.filter((track:any) => track.album_id === albumId)

    return (
        <div className="flex justify-center items-center w-full h-screen text-white text-xl">
            {
                allAlbums.map((album: any)=>{
                    return album.tracks.filter((track:any) => 
                    track.id.includes(id)).sort(() => Math.random()-0.5).map((track: any) => {
                        return <DetailContainer 
                            id={track.id}
                            title={track.name}
                            image={album.image}
                            album={album.name}
                            url = {track.preview_url}
                            artist=
                                {[data.a, data.b, data.c, data.d, data.e].find(artist => artist.albums.includes(album))?.name}
                            artistImage = {[data.a, data.b, data.c, data.d, data.e].find(artist => artist.albums.includes(album))?.image}/>
                    })
                })
            }
        </div>
    )
    
}