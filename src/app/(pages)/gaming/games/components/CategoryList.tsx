'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { GameCard } from "./index";
import { Game } from "@/app/interfaces/Game";

interface Props {
  gameList: Game[];
  title: string;
}

export const CategoryList = ({ gameList, title }: Props) => {
  const scrollRef = useRef(null);

  const scroll = (dir: string) => {
    if (!scrollRef.current) return;
    const scrollAmount = 1500; // píxeles a mover por click
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2 className="pl-4 text-[18px] font-semibold">{title}</h2>
      <div className="relative flex w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-instant-black/60 hover:bg-instant-black/75 duration-150 p-2 text-instant-white cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar flex space-x-1 overflow-x-auto scroll-smooth"
        >
          {gameList.map((game) => (
            <Link href={`/gaming/games/${game.slug}`} key={game.id}>
              <div className="inline-block min-w-[200px]">
                <GameCard header_path={game.header_path} name={game.name} />
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-instant-black/60 hover:bg-instant-black/75 duration-150 p-2 text-instant-white cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
};
