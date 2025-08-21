import Link from "next/link";
import { useState } from "react";

export const GamingBanner = () => {

    const banners = [
        {
            id: 0,
            title: "Enjoy 500+ games in max quality from any PC, laptop, or smartphone.",
            description: "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
            video: "http://video.akamai.steamstatic.com/store_trailers/257154206/movie_max_vp9.webm?t=1749678668"
        },
        {
            id: 1,
            title: "Edited",
            description: "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
            video: "http://video.akamai.steamstatic.com/store_trailers/257154206/movie_max_vp9.webm?t=1749678668"
        },
        {
            id: 2,
            title: "Enjoy 500+ games in max quality from any PC, laptop, or smartphone.",
            description: "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
            video: "http://video.akamai.steamstatic.com/store_trailers/257154206/movie_max_vp9.webm?t=1749678668"
        }
    ]

    const [idBanner, setIdBanner] = useState(0);

    const { id, video, title, description } = banners[idBanner]

    const onSelectBanner = (id) => {
        if (idBanner === id) return
        setIdBanner(id);
    };


    return (
        <div className="h-160 w-full flex items-center justify-center relative mt-13">

            <div className="w-[75%] z-20">
                <div className="flex flex-col w-[50%]">
                    <div className="text-white font-semibold">
                        <h2 className="text-[40px]">{title}</h2>
                        <p className="mt-4 w-[90%]">{description}</p>
                    </div>

                    <div className="flex w-full mt-2">
                        <Link href={'./gaming/games'}>
                            <div className="w-[250px] bg-purple-500 text-white py-2 rounded-4xl font-bold mt-3 text-center hover:bg-purple-600 transition-all">
                                View games
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full  overflow-hidden">
                <video
                    key={id} // 🔹 Esto fuerza a React a crear un nuevo elemento
                    className="h-full w-full object-cover translate-x-[10%]"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    {video ? <source src={video} type="video/webm" /> : null}
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black from-20% via-black/60 via-40% to-transparent"></div>
            </div>

            <div className="absolute flex bottom-0 mb-5">
                {
                    banners.map(banner => (
                        <button
                            className={`w-[10px] h-[10px] rounded-2xl mx-[3px]  ${banner.id == idBanner ? "bg-fuchsia-400 w-[20px]" : " bg-white cursor-pointer w-[10px] hover:bg-fuchsia-400"}  transition-all duration-300`}
                            onClick={() => onSelectBanner(banner.id)} key={banner.id} />

                    ))
                }
            </div>

        </div>
    )
}
