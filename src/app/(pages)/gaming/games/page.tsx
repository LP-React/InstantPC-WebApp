import { GameBanner, CategoryList } from "./components";
import axios from "axios";
import https from 'https';
import { notFound } from "next/navigation";

const categories = [
  "rpg", "action"
]

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const getGamesByCategory = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7140/api/Games/games-page?genres=${categories[0]}&genres=${categories[1]}&bannerSlugs=the-last-of-us-parte-1&bannerSlugs=nier-automata`,
      { httpsAgent }
    );
    return response.data
  } catch (error) {
    return notFound()
  }
}

export default async function instantpcPage() {

  const { bannerGames, genres } = await getGamesByCategory()

  console.log(genres.rpg)

  return (
    <main className="">
      <div className="mt-13 h-160">
        <GameBanner games={bannerGames} />
      </div>

      <div className="w-[75%] m-auto my-8">
        {/* {gamesByCategory.map(({ category, games }) => (
          <CategoryList gameIdsArray={games} title={category} key={category} />
        ))} */}
        <CategoryList gameList={genres.action} title={''} key={1} />
      </div>
    </main>
  );
};

