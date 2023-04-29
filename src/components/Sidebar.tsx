
export function Sidebar(){

    return (
        <div className="w-60 fixed h-full bg-black z-15 flex flex-col justify-start items-center">
            <div className="p-10">
                <a href="/" >
                    <img src={process.env.PUBLIC_URL+'/logo.png'} alt="" />
                </a>
            </div>
            <div className="flex flex-col justify-evenly text-2xl text-white h-1/4 ">
                <a href="/" className="flex flex-wrap gap-4 items-center">
                <i className="fas fa-home"></i>
                    Home</a>
                {/* <button className="flex flex-wrap gap-4 items-center">
                <i className="fas fa-search"></i>
                    Search</button> */}
                <a href="/favorite" className="flex flex-wrap gap-4 items-center">
                <i className="fas fa-heart"></i>
                    Favorite</a>
            </div>
        </div>
    )
}