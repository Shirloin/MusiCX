interface CardImage{
    src: string;
}

export function CardImage({src}: CardImage){
    return (
        <>
        <div className="hidden md:block min-w-14 flex justify-center items-center">
            <img src={src} alt="" className="min-w-14 w-14 rounded-xl"/>
        </div>
        <div className="md:hidden min-w-14 flex justify-center items-center">
            <img src={src} alt="" className="group-hover:hidden min-w-14 w-14 rounded-xl"/>
        </div>
        </>

    )
}