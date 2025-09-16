import { Gamepad2 } from "lucide-react";
import { OctagonX } from "lucide-react";
import { Users } from "lucide-react";
import { User } from "lucide-react";

export const GameInfoCards = ({
  name,
  header_path,
  genres,
  release_date,
  required_age,
  categories,
  legal_notice,
  publishers,
  controller_support
}) => {
  const whatsappNumber = "51923225506";
  const urlWhatsappMessage = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Hola%2Cdeseo+jugar+${name}&type=phone_number&app_absent=0`;

  const results = categories.filter((cat) =>
    ["Single-player", "Multi-player"].includes(cat),
  );

  return (
    <div className="relative w-[30%]">
      <div className="sticky top-[8%] w-full">
        <div className="overflow-hidden rounded-t-xl">
          <img src={header_path} alt={name} className="h-full w-full" />
        </div>

        <div className="flex justify-evenly border-b-2 border-dotted py-2">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold">
              {required_age === 0 ? "All" : `${required_age}+`}
            </div>
            <div className="text-xs">
              <span>Age</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold">
              {controller_support ? <Gamepad2 /> : <OctagonX />}
            </div>
            <div className="text-xs">
              <span>Controller support</span>
            </div>
          </div>
          {results.map((r) => (
            <div
              className="flex flex-col items-center justify-center"
              key={r.description}
            >
              <div className="py-1">
                {r.description == "Multi-player" ? <Users /> : <User />}
              </div>
              <div className="text-xs">
                <span>{r.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-b-2 border-dotted p-1 text-[14px]">
          <p className="my-2">
            <span className="font-bold">Publisher:</span>{" "}
            {publishers.map((p) => p).join(", ")}
          </p>
          <p className="my-2">
            <span className="font-bold">Genres:</span>{" "}
            {genres.map((g) => g).join(", ")}
          </p>
          <p className="my-2">
            <span className="font-bold">Release date:</span> {release_date}
          </p>
          <p className="my-2">
            <span className="font-bold">Copyright:</span> {legal_notice}
          </p>
        </div>

        <div className="mt-3 w-full cursor-pointer rounded-4xl bg-purple-500 py-2 text-center font-bold text-white transition-all hover:bg-purple-600">
          <a className="" href={urlWhatsappMessage}>
            Play now
          </a>
        </div>
      </div>
    </div>
  );
};
