interface CardImage{
    src: string;
}

export function CardImage({src}: CardImage){
    return <img src={src} alt="" className="min-w-14 w-14 rounded-xl"/>
}