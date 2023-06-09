import {createContext, ReactNode, useState} from 'react'

interface Song{
    id: string;
    title: string;
    artist: string;
    image: string;
    url: string;
    currSong:string;
}

interface SongContextType{
    song: Song;
    setSong: React.Dispatch<React.SetStateAction<Song>>;
}

export const SongContext = createContext<SongContextType>({
    song: {
        id: '',
        title: '',
        artist: '',
        image: '',
        url: '',
        currSong: ''},
    setSong: ()=>{}
})

interface SongProviderProps{
    children: ReactNode;
}

export const SongProvider: React.FC<SongProviderProps> = ({children})=>{

    const [song, setSong] = useState({
        id: '',
        title: '',
        artist: '',
        image: '',
        url: '',
        currSong: ''})

    return (
        <SongContext.Provider value={{song, setSong}}>
            {children}
        </SongContext.Provider>
    )
}