import { Metadata } from "next";
import axios from "axios";

import { GalleryGame } from "./components/GalleryGame";
import { GameInfoCards } from "./components/GameInfoCards";
import { DescriptionGame } from "./components/DescriptionGame";
import { GameBanner } from "./components/GameBanner";

import { Game } from "@/app/interfaces/Game";
import https from 'https';
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    game: string
  }>
}

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  try {
    const { game } = await params
    const { name } = await getGame(game)
    return {
      title: `InstantPC - ${name}`,
      description: `Information of ${name}`
    }
  } catch (error) {
    return {
      title: `InstantPC - Game Not Found`,
      description: ``
    }
  }
}

const getGame = async (slug: string): Promise<Game> => {
  try {
    const response = await axios.get(
      `https://localhost:7140/api/Games/${slug}`,
      { httpsAgent }
    );
    return response.data
  } catch (error) {
    return notFound()
  }
}

export default async function gamePage({ params }: Props) {

  const { game } = await params
  const gameData = await getGame(game);

  const {
    name,
    required_age,
    short_description,
    legal_notice,
    controller_support,
    header_path,
    release_date,
    library_path,
    publishers,
    categories,
    genres,
    movies,
    screenshots,
    about_the_game
  } = gameData;

  return (
    <div className="mt-24">

      <GameBanner name={name} publishers={publishers} library_path={library_path} />


      <div className="relative m-auto mt-15 flex w-[75%] justify-between pt-8">

        <div className="w-[65%] font-bold ">
          <GalleryGame movies={movies} screenshots={screenshots} />
          <span className="mt-8 block">{short_description}</span>
          <DescriptionGame safeHTML={about_the_game} />
        </div>

        <div className="relative w-[30%]">
          <GameInfoCards
            header_path={header_path}
            publishers={publishers}
            // developers={publishers}
            legal_notice={legal_notice}
            categories={categories}
            controller_support={controller_support}
            name={name}
            genres={genres}
            release_date={release_date}
            required_age={required_age}
          />
        </div>
      </div>

      <div className="m-auto mt-8 w-[75%]">
        <span>People also like:</span>
      </div>

    </div>
  );
};

