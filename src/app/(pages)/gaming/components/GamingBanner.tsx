'use client'
import Link from "next/link";
import { useState } from "react";
import { BgVideo } from "./BgVideo";
import { Banner } from "@/app/interfaces/Banner";

const banners: Banner[] = [
  {
    "id": 0,
    "title": "Enjoy 500+ games in max quality from any PC, laptop, or smartphone.",
    "description": "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
    "video": "http://video.akamai.steamstatic.com/store_trailers/257154206/movie_max_vp9.webm?t=1749678668"
  },
  {
    "id": 1,
    "title": "Edited",
    "description": "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
    "video": "http://video.akamai.steamstatic.com/store_trailers/256743980/movie_max.webm?t=1551200563"
  },
  {
    "id": 2,
    "title": "Enjoy 500+ games in max quality from any PC, laptop, or smartphone.",
    "description": "Access high-end PCs remotely for work or gaming, without spending on expensive hardware or software, all from home.",
    "video": "http://video.akamai.steamstatic.com/store_trailers/256936971/movie_max_vp9.webm?t=1680015399"
  }
]

export const GamingBanner = () => {

  const [idBanner, setIdBanner] = useState<number>(0);

  const { id, video, title, description } = banners[idBanner];

  const onSelectBanner = (id: number): void => {
    if (idBanner === id) return;
    setIdBanner(id);
  };

  return (
    <div className="relative flex h-160 items-center justify-center bg-instant-black">
      <div className="w-[70%] z-20 m-auto">
        <h1 className="text-[40px] w-[50%] font-semibold text-instant-white">{title}</h1>
        <p className="mt-4 w-[40%] font-semibold text-instant-white">{description}</p>
        <Link href={"./gaming/games"} className="px-20 inline-block mt-4 rounded-4xl bg-instant-indigo py-2 text-center font-bold text-instant-white transition-all hover:bg-instant-indigo">
          View games
        </Link>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        {banners.map((banner: Banner) => (
          <button
            key={banner.id}
            className={`mx-[3px] h-[10px] w-[10px] rounded-2xl ${banner.id === idBanner ? "w-[20px] bg-instant-indigo" : "w-[10px] cursor-pointer bg-instant-white hover:bg-instant-indigo"} transition-all duration-300`}
            aria-label={`Go to banner ${banner.id + 1}`}
            onClick={() => onSelectBanner(banner.id)}
          />
        ))}
      </div>

      <BgVideo video={video} />
    </div>
  );
};
