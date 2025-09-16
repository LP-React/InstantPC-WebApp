'use client'
import Link from "next/link";
import { GameCard } from "./index";
import { useEffect, useState } from "react";
import { GameCarousel } from "@/app/interfaces/GameCarousel";


const gamesCarouselExample: GameCarousel[] = [
  {
    "id": 4,
    "name": "NieR:Automata™",
    "slug": "nier-automata",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1745222701",
  },
  {
    "id": 3,
    "name": "The Last of Us™ Parte I",
    "slug": "the-last-of-us-parte-1",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031",
  },
  {
    "id": 4,
    "name": "The Last of Us™ Parte I",
    "slug": "the-last-of-us-parte-1",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031",
  },
  {
    "id": 5,
    "name": "The Last of Us™ Parte I",
    "slug": "the-last-of-us-parte-1",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031",
  },
  {
    "id": 6,
    "name": "The Last of Us™ Parte I",
    "slug": "the-last-of-us-parte-1",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031",
  }
]

export const CarouselGames = () => {

  const [gameList, setGameList] = useState<GameCarousel[]>(gamesCarouselExample);

  // useEffect(() => {
  //   const fetchSteamDetails = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://localhost:7140/api/Games/list`,
  //       );
  //       const json = await response.json();
  //       const gameData = json;

  //       setGameList(gameData.items);
  //     } catch (err) {
  //       console.error("Error al obtener detalles de Steam:", err);
  //     }
  //   };

  //   fetchSteamDetails();
  // }, []);

  return (
    <div className="flex w-[100%] flex-col">
      <div className="overflow-hidden">
        <div className="scroll-right">
          {[...gameList, ...gameList].map(({ name, slug, header_path }, index) => (
            <Link href={`/gaming/games/${slug}`} key={index}>
              <GameCard name={name} header_path={header_path} />
            </Link>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="scroll-left">
          {[...gameList, ...gameList].map(({ name, slug, header_path }, index) => (
            <Link href={`/gaming/games/${slug}`} key={`${slug}` + `${index}`}>
              <GameCard name={name} header_path={header_path} />
            </Link>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="scroll-right">
          {[...gameList, ...gameList].map(({ name, slug, header_path }, index) => (
            <Link href={`/gaming/games/${slug}`} key={`${slug}` + `${index}`}>
              <GameCard name={name} header_path={header_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
