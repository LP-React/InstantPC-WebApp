import Link from "next/link";
import { useEffect, useState } from "react";

export const GameBanner = () => {

    const [gameData, setGameData] = useState({});
    const [idGame, setIdGame] = useState(3489700);

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

    const idGames = [
        1091500,
        3489700,
        1332010,
        1888930,
        2124490
    ]

    const onSelectGame = (id) => {
        if (id === idGame) {
            return
        } else {
            setGameData({});
            setIdGame(id);
        }
    };

    const { name, publishers, movies, short_description } = gameData;
    const whatsappNumber = "51923225506"
    const urlWhatsappMessage = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${name}&type=phone_number&app_absent=0`


    return (
        <div className="h-160 w-full flex items-center justify-center relative mt-13 bg-instant-black">

            <div className="w-[75%] z-20">

                <div className="flex flex-col w-[50%]">
                    <div className="flex">
                        <div className="h-50 rounded-md overflow-hidden min-w-[140px] ">
                            <img src={`http://localhost:5158/images/steam/${idGame}.jpg`} alt={name} className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-4 h-full flex flex-col justify-center text-instant-white">
                            <h2 className="text-5xl  font-bold py-2">{name}</h2>
                            <h3 className="text-sm">Publisher: {publishers}</h3>
                            <p className="text-sm mt-4">{short_description}</p>
                        </div>
                    </div>

                    <div className="flex w-full mt-2 ">
                        <a className="w-[46%] mr-5 bg-instant-pink text-instant-white py-1.5 rounded-4xl font-bold mt-3 text-center hover:bg-instant-pink transition-all cursor-pointer" href={urlWhatsappMessage}>
                            <div className="">
                                Play now
                            </div>
                        </a>
                        <Link className="w-[46%] bg-gray-500 text-instant-white py-1.5 rounded-4xl font-bold mt-3 text-center hover:bg-instant-white hover:text-instant-black transition-all" href={`http://localhost:3000/gaming/games/${idGame}`}>
                            <div className="">
                                Read more
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video
                    key={idGame}
                    className="h-full w-full object-cover translate-x-[10%]"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    {movies ? <source src={movies[0].webm.max} type="video/webm" /> : null}
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black from-20% via-black/60 via-40% to-transparent"></div>
            </div>

            <div className="absolute flex bottom-0 mb-5">
                {
                    idGames.map(id => (
                        <button className={`w-[10px] h-[10px] ${idGame == id ? 'bg-instant-pink w-[20px]' : 'bg-instant-white w-[10px] hover:bg-fuchsia-400 cursor-pointer'} rounded-2xl mx-[3px] transition-all duration-300`} onClick={() => onSelectGame(id)} key={id}></button>
                    ))
                }
            </div>

        </div>
    )
}
