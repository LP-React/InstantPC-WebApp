import { Users } from "lucide-react";
import { User } from "lucide-react";

export const GameInfoCards = ({ name, header_image, genres, release_date, required_age, categories, legal_notice, publishers, developers }) => {

    const whatsappNumber = "51923225506"
    const urlWhatsappMessage = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${name}&type=phone_number&app_absent=0`

    const results = categories.filter(cat =>
        ["Single-player", "Multi-player"].includes(cat.description)
    );

    console.log(results)

    return (
        <div className="text-black w-[30%] bg-white relative">
            <div className="w-full sticky top-[8%]">
                <div className="rounded-t-xl overflow-hidden">
                    <img src={header_image} alt={name} className="w-full h-full" />
                </div>

                <div className="flex justify-evenly border-b-2 border-dotted border-b-gray-200 py-2">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="text-xl font-bold">

                            {required_age === 0 ? "All" : `${required_age}+`}
                        </div>
                        <div className="text-xs">
                            <span>Age</span>
                        </div>
                    </div>
                    {results.map(r =>
                        <div className="flex flex-col justify-center items-center" key={r.description}>
                            <div className="py-1">
                                {
                                    r.description == 'Multi-player' ? <Users /> : <User />
                                }
                            </div>
                            <div className="text-xs">
                                <span>{r.description}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-1 text-[14px] border-b-2 border-dotted border-b-gray-200">
                    <p className="my-2"><span className="font-bold">Publisher:</span> {publishers}</p>
                    <p className="my-2"><span className="font-bold">Developers:</span> {developers}</p>
                    <p className="my-2"><span className="font-bold">Type:</span> {genres.map(g => g.description).join(", ")}</p>
                    <p className="my-2"><span className="font-bold">Release date:</span> {release_date.date}</p>
                    <p className="my-2"><span className="font-bold">Copyright:</span> {legal_notice}</p>
                </div>

                <div className="w-full bg-purple-500 text-white py-2 rounded-4xl font-bold mt-3 text-center hover:bg-purple-600 transition-all cursor-pointer">
                    <a className="" href={urlWhatsappMessage}>Play now</a>
                </div>
            </div>
        </div>
    )
}
