import { useEffect, useState } from "react";

export const GameCard = ({ idGame }) => {

    const [gameData, setGameData] = useState({});

    useEffect(() => {
        const fetchSteamDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5158/api/steam/${idGame}`);
                const json = await response.json();
                const gameKey = Object.keys(json)[0]; // e.g., "2205950"
                const gameData = json[gameKey]?.data;

                setGameData(gameData)

            } catch (err) {
                console.error("Error al obtener detalles de Steam:", err);
            }
        };

        fetchSteamDetails();
    }, [idGame]);

    if (!gameData) { return }

    return (
        <div className="relative w-[280px] h-[130px] overflow-hidden rounded-md m-[3px]">
            <div className="w-full h-full">
                <img
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = '/instantpc_logo_white.png';
                    }}
                    src={gameData?.header_image || '/instantpc_logo_white.png'}
                    alt={idGame}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
