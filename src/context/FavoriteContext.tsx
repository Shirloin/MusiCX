import { useState, useEffect, createContext, ReactNode, useContext } from "react";

interface FavoriteContextType{
    favorite: string[],
    setFavorite: React.Dispatch<React.SetStateAction<string[]>>
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favorite: [],
    setFavorite: ()=>{}
})

interface FavoriteProviderProps{
    children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({children})=>{

    const [favorite, setFavorite] = useState(()=>{
        let lsv = localStorage.getItem("favorite");
        if(lsv==null){
            return [
                "6mkZkeZ9YY11rPzdWgs9eA",
                "3vcgjaj7fi4TNUgvjDcQ7Z",
                "553eAXr0YyVOyjbN7b7RBr"
            ]
        }
        else{
            return JSON.parse(lsv);
        }
    });

    useEffect(()=>{
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite])

    return (
        <FavoriteContext.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}