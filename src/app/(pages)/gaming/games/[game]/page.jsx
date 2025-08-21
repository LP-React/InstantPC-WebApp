'use client'
import { usePathname } from "next/navigation"
import { GameBanner } from "./components/GameBanner";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify"
import { GalleryGame } from "./components/GalleryGame";
import { GameInfoCards } from "./components/GameInfoCards";
import { DescriptionGame } from "./components/DescriptionGame";

const gamePage = () => {

    const pathname = usePathname()

    const match = pathname.match(/\/games\/([^/]+)/);
    const idPath = match ? match[1] : null;


    const [gameData, setGameData] = useState(null);
    // const [gallery, setGallery] = useState(0)

    useEffect(() => {
        const fetchSteamData = async () => {
            try {
                const response = await axios.get(`http://localhost:5158/api/steam/${idPath}`);
                const data = response.data[idPath];

                if (data.success) {
                    setGameData(data.data);
                } else {
                    console.error("❌ No se encontró el juego en Steam");
                }
            } catch (err) {
                console.error("❌ Error al consultar Steam API:", err);
            }
        };

        fetchSteamData();

    }, [idPath]);

    if (!gameData) return <div className="text-white">Cargando...</div>;


    function decodeSteamHTML(raw) {
        return raw
            .replace(/\\u003C/g, "<")
            .replace(/\\u003E/g, ">")
            .replace(/\\u0026/g, "&"); // por si hay &amp; escapados
    }

    function getSafeDescription(raw) {
        const decoded = decodeSteamHTML(raw);

        return DOMPurify.sanitize(decoded, {
            ALLOWED_TAGS: ['p', 'ul', 'li', 'strong', 'em', 'br', 'b', 'i'],
            ALLOWED_ATTR: [] // sin atributos como onclick, style, etc.
        });
    }

    const safeHTML = getSafeDescription(gameData.about_the_game);

    console.log(gameData.genres)


    const { name, short_description, categories, header_image, genres, release_date, publishers, developers, required_age, legal_notice, movies, screenshots } = gameData;

    return (
        <div>

            <GameBanner name={name} publishers={publishers} developers={developers} idGame={idPath} />

            <div className="w-full bg-white mt-15">
                <div className="flex justify-between w-[75%] m-auto pt-8 relative">



                    <div className=" text-black font-bold w-[65%]">

                        <GalleryGame movies={movies} screenshots={screenshots} />
                        <span className="mt-8 block">{short_description}</span>

                        <DescriptionGame safeHTML={safeHTML} />

                    </div>


                    <GameInfoCards header_image={header_image} publishers={publishers} developers={developers} legal_notice={legal_notice} categories={categories} name={name} genres={genres} release_date={release_date} required_age={required_age} />

                </div>

                <div className="mt-8 w-[75%] text-black m-auto">
                    <span>People also like:</span>

                </div>
            </div>
        </div>
    )
}

export default gamePage
