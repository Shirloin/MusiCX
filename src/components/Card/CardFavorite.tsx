import { FavoriteContext } from "../../context/FavoriteContext";
import {useContext} from 'react'

interface CardFavorite{
    id: string;
}

export function CardFavorite({id}: CardFavorite){
    
    const {favorite, setFavorite} = useContext(FavoriteContext)
    
    const isFavorite = ()=>{
        let has = favorite.some((a)=>a===id)
        if(has) return true
        else return false
    }
    
    const handleClick = (e: any)=>{
        e.preventDefault();
        if(isFavorite()){
            console.log("favorite")
            setFavorite((favorite) => favorite.filter(
                (a) => a !== id
            ))
        } 
        else{
            console.log("not favorite")
            setFavorite([...favorite, id])
        }
    }

    

    return (
        <div className="flex justify-center items-center w-16 sm:w-1/6">
            <button onClick={handleClick}
            className={
                isFavorite() ? "":"hidden group-hover:block"
            }>
                <i className={
                    isFavorite() ? "fas fa-heart text-green-400 text-xl":"far fa-heart text-gray-400 text-xl hover:text-white"
                }></i>
            </button>
        </div>
    )
}