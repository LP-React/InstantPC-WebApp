'use client'
import { useState } from "react";
import { BgVideo } from "../../components";
import { GameBannerInfo } from "./GameBannerInfo";
import Link from "next/link";
import { GameBannerInfo as GameInfo } from "@/app/interfaces/GameBannerInfo";
import { getUrlWhatsapp } from "@/app/utils/getUrlWhatsapp";

interface Props {
  games: GameInfo[]
}

export const GameBanner = ({ games }: Props) => {

  const [gameSelected, setGameSelected] = useState(games[0]);

  const { id, name, slug, publishers, short_description, library_path } = gameSelected;


  const onSelectGame = (id = 0) => {
    if (id === gameSelected.id) {
      return;
    } else {
      setGameSelected(games[id]);
    }
  };

  return (
    <div className="bg-instant-black relative flex h-full w-full items-center ">

      <div className="z-20 w-[70%] m-auto">
        <GameBannerInfo name={name} publishers={publishers} short_description={short_description} library_path={library_path} />

        <div className="mt-6" role="group">
          <a className="bg-instant-pink text-instant-white hover:bg-instant-pink mr-5 w-[46%] cursor-pointer rounded-4xl py-2.5 px-22 font-bold transition-all" href={getUrlWhatsapp(name)}>
            Play now
          </a>
          <Link
            className="text-instant-white hover:bg-instant-white hover:text-instant-black mt-3 w-[46%] rounded-4xl bg-instant-gray py-2.5 px-22 font-bold transition-all"
            href={`/gaming/games/${slug}`}
          >
            Read more
          </Link>
        </div>
      </div>


      {/* {movies?.[0]?.webm?.max && (
        <BgVideo video={movies[0].webm.max} id={idGame} />
      )} */}

      <BgVideo video={"http://video.akamai.steamstatic.com/store_trailers/256936971/movie_max_vp9.webm?t=1680015399"}/>



      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        {games.map((game, index) => (
          <button
            className={`h-[10px] w-[10px] ${game.id === id ? "bg-instant-pink w-[20px]" : "bg-instant-white w-[10px] cursor-pointer hover:bg-fuchsia-400"} mx-[3px] rounded-2xl transition-all duration-300`}
            onClick={() => onSelectGame(index)}
            key={game.id}
          ></button>
        ))}
      </div>

    </div>
  );
};

