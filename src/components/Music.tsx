import { SongContext } from "../context/SongContext"
import { useContext } from "react"

interface Song{
    id: string;
    title: string;
    artist: string;
    image: string;
    url: string;
}


export function Music({id, image, title, artist, url}: Song){

    const {song, setSong} = useContext(SongContext)

    const isPlaying = ()=>{
        if(song.id==='' || song.id!==id)return false
        return true
    }

    const handleClick = (e:any)=>{
        e.preventDefault()
        if(id===song.id){
            setSong({
                id: '',
                title: '',
                artist: '',
                image: '',
                url: ''})
        }
        else{
            setSong({
                id: id,
                title: title,
                artist: artist,
                image: image,
                url: url})
        }
    }
    return (
    <div>
        {
            isPlaying()?(
                <button className="hidden w-full h-full items-center justify-center group-hover:flex"
                        onClick={handleClick}>
                    <i className="fas fa-pause"></i>
                </button>
            ):
            (
                <button className="hidden w-full h-full items-center justify-center group-hover:flex"
                        onClick={handleClick}>
                    <i className="fas fa-play"></i>
                </button>
            )
        }
    </div>
    )
}