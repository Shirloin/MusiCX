import { SongContext } from "../context/SongContext"
import { useContext } from "react"

interface Song{
    id: string;
    title: string;
    artist: string;
    image: string;
    url: string;
    currSong: string;
}


export function Music({id, image, title, artist, url, currSong}: Song){

    const {song, setSong} = useContext(SongContext)

    const isPlaying = ()=>{
        if(song.currSong==='' || song.currSong!==url)return false
        return true
    }

    const handleClick = (e:any)=>{
        e.preventDefault()
        if(id===song.id && isPlaying()){
            setSong({
                id: id,
                title: title,
                artist: artist,
                image: image,
                url: url,
                currSong: ''})
        }
        else{
            setSong({
                id: id,
                title: title,
                artist: artist,
                image: image,
                url: url,
                currSong: url})
        }

    }
    return (
    <button className="hidden group-hover:flex w-full h-20" onClick={handleClick}>
        {
            isPlaying()?(
                <button className="w-full h-full items-center justify-center">
                    <i className="fas fa-square"></i>
                </button>
            ):
            (
                <button className=" w-full h-full items-center justify-center">
                    <i className="fas fa-play"></i>
                </button>
            )
        }
    </button>
    )
}