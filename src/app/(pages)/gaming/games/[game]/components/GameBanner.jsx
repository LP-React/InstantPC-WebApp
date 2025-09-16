export const GameBanner = ({ name, publishers, library_path }) => {
  const whatsappNumber = "51923225506";
  const urlWhatsappMessage = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${name}&type=phone_number&app_absent=0`;

  return (
    <div className="mt-24 w-full">
      <div className="m-auto flex w-[75%] items-center justify-between">
        <div className="flex items-center">
          <div>
          </div>
          <div className="h-46 min-w-[120px] overflow-hidden rounded-md">
            <img
              src={library_path}
              alt={name}
              className="h-full"
            />
          </div>
          <div className="ml-5 flex h-full flex-col justify-center">
            <h2 className="py-2 text-4xl font-bold">{name}</h2>

            <h3 className="text-sm">Publisher: {publishers.map(pub => (<span key={pub}>
              {pub}
            </span>))}</h3>
          </div>
        </div>

        <div className="mt-3 h-10 w-[30%] cursor-pointer rounded-4xl bg-instant-indigo py-2 text-center font-bold text-instant-white transition-all hover:bg-instant-indigo">
          <a className="" href={urlWhatsappMessage}>
            Play now
          </a>
        </div>
      </div>
    </div>
  );
};
