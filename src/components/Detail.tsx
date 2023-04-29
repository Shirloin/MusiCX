import { useQuery } from "@apollo/client";
import { GET_ALL_SONG } from "../queries/query";
import { useContext} from 'react';
import { SearchContext } from "../context/SearchContext";
import { CardContainer } from "./Card/Card";

interface DetailContainerProps{
    id: string;
    title: string;
    image: string;
    artist: string;
    album: string;
    artistImage: string;
    url: string;
}

export function DetailContainer({id, title, image, artist, album, artistImage, url}: DetailContainerProps){
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
    return (
        <div className="w-full h-full rounded-xl flex flex-col justify-start items-center">
            <div className="bg-gradient-to-b from-green-700 to-gray-900 w-full h-80 flex  items-center py-10">
                <div className="relative h-full w-72 flex flex-col justify-end items-center xl:px-5">
                    <img src={image} alt="" className="w-24 sm:w-36 md:w-40 lg:w-48 xl:w-60 drop-shadow-2xl rounded-xl"/>
                </div>
                <div className="w-full h-full text-white font-bold px-2 flex">
                    <div className="w-full text-white font-bold flex flex-col justify-end ">
                        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl  w-full flex items-center py-2">
                            {album}
                        </div>
                        <div className="w-full flex items-center sm:py-2">
                            <div className="w-16 xl:w-20">
                                <img src={artistImage} alt="" className="w-12 sm:w-14 md:w-16 rounded-full" />
                            </div>
                            <div className="flex justify-center items-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                {artist}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 w-full h-full">
                {
                    allAlbums.map((album: any)=>{
                        return album.tracks.filter((track:any) => 
                        track.name.toLowerCase().includes(searchTerm.toLowerCase()) && track.name.toLowerCase().includes(title.toLowerCase())).sort(() => Math.random()-0.5).map((track: any) => {
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

        </div>
    )
}