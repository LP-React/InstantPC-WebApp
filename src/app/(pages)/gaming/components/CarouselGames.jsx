import Link from "next/link";
import { GameCard } from "./index";

export const CarouselGames = () => {

    const gameIdsArray1 = [
        1091500, // Cyberpunk 2077
        3489700, // Stellar Blade
        1332010, // Elden Ring
        1888930, // Black Myth: Wukong
        814380,  // Sekiro: Shadows Die Twice
        1790600, // Lies of P
        2669320, // Dragon's Dogma 2
        2050650, // Armored Core VI

    ]

    const gameIdsArray2 = [
        1174180, // Red Dead Redemption 2
        582010,  // Monster Hunter: World
        812140,  // Assassin's Creed Odyssey
        381210,  // Dead by Daylight
        582660,  // Black Desert Online
        1426210, // Overcooked! 2
        1097150, // Fall Guys
    ]

    const gameIdsArray3 = [
        3241660, // REPO
        550, // L4D2
        814380,  // Sekiro: Shadows Die Twice
        232090, // Killing floor 2
        2379780, // Balatro
        1593500, // God of war
        3240220, // Silent Hill 2 Remake
        1551360, // Forza Horizon 5
    ]

    return (
        <div className="flex flex-col w-[100%]">

            <div className="overflow-hidden">
                <div className="scroll-right">
                    {[...gameIdsArray1, ...gameIdsArray1].map((idGame, index) => (
                        <Link href={`/gaming/games/${idGame}`} key={`${idGame}-${index}`}>
                            <GameCard idGame={idGame} />
                        </Link>
                    ))}
                </div>
            </div>


            <div className="overflow-hidden">
                <div className="scroll-left">
                    {[...gameIdsArray2, ...gameIdsArray2].map((idGame, index) => (
                        <Link href={`/gaming/games/${idGame}`} key={`${idGame}-${index}`}>
                            <GameCard idGame={idGame} />
                        </Link>
                    ))}
                </div>
            </div>


            <div className="overflow-hidden">
                <div className="scroll-right">
                    {[...gameIdsArray3, ...gameIdsArray3].map((idGame, index) => (
                        <Link href={`/gaming/games/${idGame}`} key={`${idGame}-${index}`}>
                            <GameCard idGame={idGame} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
