import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { GameCard } from "./index";

export const CategoryList = ({ gameIdsArray, title }) => {

    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (!scrollRef.current) return;
        const scrollAmount = 1500; // píxeles a mover por click
        scrollRef.current.scrollBy({
            left: dir === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };


    return (
        <div className="flex flex-col relative w-[85%] m-auto my-8">

            <h3 className="pl-4 text-[18px] font-semibold pb-2">{title}</h3>
            <div className="flex flex-col relative w-[100%] m-auto">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10"
                >
                    <ChevronLeft size={20} />
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar space-x-1 scroll-smooth"
                >
                    {gameIdsArray.map((idGame) => (
                        <Link href={`/gaming/games/${idGame}`} key={idGame}>
                            <div className="inline-block min-w-[200px]">
                                <GameCard idGame={idGame} />
                            </div>
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 z-10"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}
