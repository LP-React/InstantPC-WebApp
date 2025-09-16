import { GameLibraryCard } from "./GameLibraryCard";

interface Props {
    id: any;
    name: any;
    publishers: any;
    short_description: any;
    header_path: any;
}

export const GameBannerInfo = ({ id, name, publishers, short_description, header_path }: Props) => {

    return (

        <div className="flex w-[50%]">
            <GameLibraryCard header_path={header_path} name={name} />

            <div className="text-instant-white ml-4 flex h-full flex-col justify-center">
                <h2 className="py-2 text-5xl font-bold">{name}</h2>
                <h3 className="text-sm">Publisher: {publishers?.join(", ")}</h3>
                <p className="mt-4 text-sm">{short_description}</p>
            </div>
        </div>
    )
}
