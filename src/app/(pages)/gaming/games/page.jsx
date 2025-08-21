'use client'
import { GameBanner, CategoryList } from "./components";

const instantpcPage = () => {

    const gamesByCategory = [
        {
            category: "Recent added games",
            games: [
                1091500, // Cyberpunk 2077
                3489700, // Stellar Blade
                1332010, // Elden Ring
                1888930, // Black Myth: Wukong
                814380,  // Sekiro: Shadows Die Twice
                1790600, // Lies of P
                2669320, // Dragon's Dogma 2
                2050650, // Armored Core VI
                3240220, // Silent Hill 2 Remake
                2358720,  // Tekken 8
            ]
        },
        {
            category: "Action",
            games: [
                1174180, // Red Dead Redemption 2
                582010,  // Monster Hunter: World
                812140,  // Assassin's Creed Odyssey
                381210,  // Dead by Daylight
                582660,  // Black Desert Online
                1222670, // Horizon Zero Dawn
                271590,  // GTA V
                620980   // Brawlhalla
            ]
        },
        {
            category: "Party & Family",
            games: [
                1426210, // Overcooked! 2
                1097150, // Fall Guys
                431240,  // Human: Fall Flat
                322330,  // Don’t Starve Together
                1599600, // Party Animals
                1222670, // Moving Out
                1056640, // Among Us
                431960   // Wallpaper Engine
            ]
        },
        {
            category: "Horror",
            games: [
                883710,  // Resident Evil 2 Remake
                2050650, // Resident Evil 4 Remake
                418370,  // Outlast 2
                1245620, // The Medium
                782330,  // DOOM Eternal (acción/horror)
                17470,   // Dead Space
                3240220, // Silent Hill 2 Remake
                509980   // Five Nights at Freddy's: Sister Location
            ]
        },
        // {
        //     category: "Survival",
        //     games: [
        //         108600,  // Project Zomboid
        //         892970,  // Valheim
        //         244850,  // Space Engineers
        //         218620,  // PAYDAY 2
        //         346110,  // ARK: Survival Evolved
        //         648800,  // Raft
        //         362680,  // The Long Dark
        //         238960   // Path of Exile (survival elements también)
        //     ]
        // },
        {
            category: "RPG",
            games: [
                292030,  // The Witcher 3
                582010,  // Monster Hunter World
                1245620, // The Medium (RPG/adventure hybrid)
                306130,  // The Elder Scrolls Online
                582660,  // Black Desert Online
                367520,  // Hollow Knight (metroidvania RPG)
                739630,  // Phasmophobia (light RPG)
                271590   // GTA V (RPG mods)
            ]
        },
        // {
        //     category: "Strategy",
        //     games: [
        //         289070,  // Sid Meier’s Civilization VI
        //         813780,  // Age of Empires II: Definitive Edition
        //         236850,  // Europa Universalis IV
        //         281990,  // Stellaris
        //         200510,  // XCOM: Enemy Unknown
        //         268500,  // XCOM 2
        //         620,     // Portal 2 (puzzle/estrategia)
        //         1426210  // Age of Empires IV
        //     ]
        // },
        {
            category: "Sports & Racing",
            games: [
                1263850, // F1 2021
                1446780, // FIFA 22
                646910,  // NBA 2K21
                1238810, // Forza Horizon 4
                1551360, // Forza Horizon 5
                1086940, // Football Manager 2020
                1142710, // Tony Hawk's Pro Skater
                960170   // WRC 9 FIA World Rally Championship
            ]
        },
        {
            category: "Fighting",
            games: [
                873180,  // Mortal Kombat 11
                222940,  // Tekken 7
                2358720, // Tekken 8
                586140,  // Dragon Ball FighterZ
                976730,  // Jump Force
                247080,  // Skullgirls
                205950,  // Injustice: Gods Among Us
                1942230  // Guilty Gear -Strive-
            ]
        },
        {
            category: "Indie",
            games: [
                367520,  // Hollow Knight
                250900,  // The Binding of Isaac: Rebirth
                105600,  // Terraria
                504230,  // Celeste
                8930,    // Spelunky
                252950,  // Rocket League
                413150,  // Stardew Valley
            ]
        },
    ]

    return (
        <div className="">
            <GameBanner />

            {
                gamesByCategory.map(({ category, games }) => (
                    <CategoryList gameIdsArray={games} title={category} key={category} />
                ))
            }





            {/* <div className="flex flex-col  w-[85%] m-auto">
                <h3 className="w-[100%] m-auto pl-4 text-[22px] font-semibold text-center">All games</h3>

                <div className="flex mt-4 justify-between">
                    <div className="flex space-x-2">
                        {
                            categories.map(cat => (
                                <button key={cat} className=" py-1 px-3 border-1 rounded-3xl">
                                    {cat}
                                </button>
                            ))
                        }
                    </div>
                    <input type="text" placeholder="Search game..." className="border-b-2 border-gray-200 -tracking-tight pl-2 hover:border-fuchsia-500 transition" />
                </div>

                <div className="flex p-4 w-[100%] flex-wrap justify-center m-auto mt-5">
                    {games.map(game =>
                    (
                        <Link href={`/gaming/games/${game.steamId}`} key={game.steamId}>
                            <GameCard idGame={game.steamId} />
                        </Link>
                    ))}
                </div>
            </div> */}

        </div>
    )
}

export default instantpcPage

// useEffect(() => {
//     const fetchGames = async () => {
//         try {
//             const response = await axios.get('http://localhost:5158/api/games');
//             setGames(response.data);
//         } catch (error) {
//             console.error("Error al obtener juegos:", error);
//         }
//     };

//     fetchGames();
// }, []);