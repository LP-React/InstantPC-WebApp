import { getUrlWhatsapp } from "@/app/utils/getUrlWhatsapp";
import Image from "next/image";

interface Props {
  name: string
  publishers: string[]
  library_path: string
}

export const GameBanner = ({ name, publishers, library_path }: Props) => {
  return (
    <div className="m-auto flex w-[75%] items-center justify-between">
      <div className="flex items-center">
        <Image src={library_path} alt={name} width={300} height={450} draggable={false} className="select-none overflow-hidden rounded-md w-[160px] min-w-[100px]" />
        <div className="ml-5 flex h-full flex-col justify-center">
          <h1 className="py-2 text-4xl font-bold">{name}</h1>
          <h3 className="text-sm">
            Publisher: {publishers.map(pub => <span key={pub}>{pub}</span>)}
          </h3>
        </div>
      </div>
      <a className="w-[30%] min-w-[200px] py-2 rounded-full bg-instant-indigo text-center font-bold text-instant-white transition-all hover:bg-instant-indigo select-none" href={getUrlWhatsapp(name)}>
        Play now
      </a>
    </div>
  );
};
