'use client'
import { useEffect, useState } from "react";
import { GameBanner, CategoryList } from "./components";
import axios from "axios";
import { GameBannerInfo } from "@/app/interfaces/GameBannerInfo";


const gamesJson: GameBannerInfo[] = [
  {
    "id": 3,
    "name": "The Last of Us™ Parte I",
    "slug": "the-last-of-us-parte-1",
    "short_description": "Descubre el galardonado juego que inspiró la aclamada serie de televisión. Guía a Joel y Ellie por unos Estados Unidos postapocalípticos y encuentra aliados y enemigos inolvidables en The Last of Us™.",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1750959031",
    "publishers": null
  },
  {
    "id": 4,
    "name": "NieR:Automata™",
    "slug": "nier-automata",
    "short_description": "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
    "header_path": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/header.jpg?t=1745222701",
    "publishers": null
  }
]

const categories = [
  "rpg", "action"
]

const instantpcPage = () => {

  const [games, setGames] = useState<GameBannerInfo[]>(gamesJson);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchSteamData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7140/api/Games/games-page?genres=${categories[0]}&genres=${categories[1]}&bannerSlugs=the-last-of-us-parte-1&bannerSlugs=nier-automata`,
        );
        const data = response.data;

        console.log(data)

        if (data) {
          setGenres(data.genres);
          // setGames(data.bannerGames)
        } else {
          console.error("❌ No se encontró el juego en Steam");
        }
      } catch (err) {
        console.error("❌ Error al consultar Steam API:", err);
      }
    };

    fetchSteamData();
  }, []);

  return (
    <main className="">
      <div className="mt-13 h-160">
        <GameBanner games={games} />
      </div>

      <div className="w-[75%] m-auto my-8">

        {/* {gamesByCategory.map(({ category, games }) => (
          <CategoryList gameIdsArray={games} title={category} key={category} />
        ))} */}

        <CategoryList gameList={gamesJson} title={''} key={1} />
        <CategoryList gameList={gamesJson} title={''} key={2} />

      </div>

    </main>
  );
};

export default instantpcPage;
