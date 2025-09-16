import { NewCard } from "./NewCard";

export const GamingNews = () => {
  const newsInfo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h3 className="pl-2 text-xl font-semibold">InstantPC Gaming News</h3>
      <div className="mt-4 flex w-[100%]">
        {newsInfo.map((news: number) => (
          <NewCard key={news} />
        ))}
      </div>
    </>
  );
};
