import Image from "next/image";

interface Props {
    name: any;
    publishers: any;
    short_description: any;
    library_path: any;
}

export const GameBannerInfo = ({ name, publishers, short_description, library_path }: Props) => {


    return (

        <div className="flex w-[50%]">
            <div className="">
                <Image
                    width={300}
                    height={450}
                    src={library_path}
                    alt={name}
                    className="h-full w-full object-cover h-60 min-w-[140px] overflow-hidden rounded-md"
                />
            </div>

            <div className="text-instant-white ml-4 flex h-full flex-col justify-center">
                <h2 className="py-2 text-5xl font-bold">{name}</h2>
                <h3 className="text-sm">Publisher: {publishers?.join(", ")}</h3>
                <p className="mt-4 text-sm">{short_description}</p>
            </div>
        </div>
    )
}
