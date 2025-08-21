'use client'


export const GameBanner = ({ idGame, name, publishers, developers }) => {

    const whatsappNumber = "51923225506"
    const urlWhatsappMessage = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${name}&type=phone_number&app_absent=0`


    return (
        <div className="w-full mt-24">
            <div className="flex m-auto justify-between w-[75%] items-center">
                <div className="flex items-center">
                    <div className="h-46 rounded-md overflow-hidden min-w-[120px]">
                        <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${idGame}/library_600x900.jpg`} alt={name} className="h-full " />
                    </div>
                    <div className="ml-5 h-full flex flex-col justify-center ">
                        <h2 className="text-4xl font-bold py-2">{name}</h2>
                        <h3 className="text-sm">Publisher: {publishers}</h3>
                        <h3 className="text-sm">Developer: {developers}</h3>
                    </div>
                </div>

                <div className="w-[30%] h-10 bg-purple-500 text-white py-2 rounded-4xl font-bold mt-3 text-center hover:bg-purple-600 transition-all cursor-pointer">
                    <a className="" href={urlWhatsappMessage}>Play now</a>
                </div>
            </div>
        </div>
    );
};
