import { getUrlWhatsapp } from "@/app/utils/getUrlWhatsapp";
import { Gamepad2, OctagonX, Users, User } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  header_path: string;
  genres: string[];
  release_date: Date;
  required_age: number;
  categories: string[];
  legal_notice: string;
  publishers: string[];
  controller_support: boolean;
}

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
}: Props) => {


  const results = categories.filter((cat) =>
    ["Single-player", "Multi-player"].includes(cat),
  );

  return (
    <div className="sticky top-[8%] w-full">

      <Image src={header_path} alt={name} width={460} height={215} draggable={false} className="select-none overflow-hidden rounded-t-xl" />

      <div className="flex justify-evenly border-b-2 border-dotted py-2 select-none">
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

      <a className="mt-3 w-full block cursor-pointer rounded-4xl bg-purple-500 py-2 text-center font-bold text-white transition-all hover:bg-purple-600 select-none" href={getUrlWhatsapp(name)}>
        Play now
      </a>
    </div>
  );
};
