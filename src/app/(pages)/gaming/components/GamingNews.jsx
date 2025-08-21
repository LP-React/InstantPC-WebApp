import { NewCard } from "./NewCard"

export const GamingNews = () => {

    const newsInfo = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    return (
        <div className="w-full">
            <h3 className="pl-2 font-semibold text-xl">InstantPC Gaming News</h3>
            <div className="flex w-[100%] mt-4">
                {
                    newsInfo.map(news =>
                        (<NewCard key={news} />)
                    )
                }
            </div>
        </div>
    )
}
