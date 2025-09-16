import Link from "next/link"
import { CarouselGames } from "./CarouselGames"

export const DiscoverGames = () => {
    return (
        <>
            <h3 className="py-6 text-4xl font-semibold text-center">
                Discover all the trending games on InstantPC
            </h3>
            <CarouselGames />
            <Link href={"/gaming/games"} className="mt-4 block text-[18px] text-center">
                Discover games
            </Link>
        </>
    )
}
