import Image from "next/image";

interface Props {
  header_path: string;
  name: string;
}

export const GameCard = ({ header_path, name }: Props) => {

  return (
    <div className="relative m-2 h-[130px] w-[280px] overflow-hidden rounded-md transition-all duration-250 ease-in-out hover:scale-105">
      <div className="h-full w-full">
        <Image
          loading="lazy"
          width={460}
          height={215}
          src={header_path || "/instantpc_logo_white.png"}
          alt={name}
        />
      </div>
    </div>
  );
};
