"use client";
import { usePathname } from "next/navigation";
import { GameBanner } from "./components/GameBanner";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { GalleryGame } from "./components/GalleryGame";
import { GameInfoCards } from "./components/GameInfoCards";
import { DescriptionGame } from "./components/DescriptionGame";

const gamePage = () => {

  const pathname = usePathname();
  const match = pathname.match(/\/games\/([^/]+)/);
  const slug = match ? match[1] : null;

  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const fetchSteamData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7140/api/Games/${slug}`,
        );
        const data = response.data;

        if (data) {
          setGameData(data);
        } else {
          console.error("❌ No se encontró el juego en Steam");
        }
      } catch (err) {
        console.error("❌ Error al consultar Steam API:", err);
      }
    };

    fetchSteamData();
  }, [slug]);

  if (!gameData) return <div>Cargando...</div>;

  function decodeSteamHTML(raw) {
    return raw
      .replace(/\\u003C/g, "<")
      .replace(/\\u003E/g, ">")
      .replace(/\\u0026/g, "&"); // por si hay &amp; escapados
  }

  function getSafeDescription(raw) {
    const decoded = decodeSteamHTML(raw);

    return DOMPurify.sanitize(decoded, {
      ALLOWED_TAGS: ["p", "ul", "li", "strong", "em", "br", "b", "i"],
      ALLOWED_ATTR: [], // sin atributos como onclick, style, etc.
    });
  }

  const safeHTML = getSafeDescription(gameData.about_the_game);

  const {
    id,
    name,
    required_age,
    short_description,
    legal_notice,
    controller_support,
    header_path,
    release_date,
    library_path,
    pathLogo,
    publishers,
    categories,
    genres,
    movies,
    screenshots,
  } = gameData;

  return (
    <div>
      <GameBanner
        name={name}
        publishers={publishers}
        library_path={library_path}
      />

      <div className="mt-15 w-full ">
        <div className="relative m-auto flex w-[75%] justify-between pt-8">
          <div className="w-[65%] font-bold ">
            <GalleryGame movies={movies} screenshots={screenshots} />
            <span className="mt-8 block">{short_description}</span>

            <DescriptionGame safeHTML={safeHTML} />
          </div>

          <GameInfoCards
            header_path={header_path}
            publishers={publishers}
            developers={publishers}
            legal_notice={legal_notice}
            categories={categories}
            controller_support={controller_support}
            name={name}
            genres={genres}
            release_date={release_date}
            required_age={required_age}
          />
        </div>

        <div className="m-auto mt-8 w-[75%] text-black">
          <span>People also like:</span>
        </div>
      </div>
    </div>
  );
};

export default gamePage;
