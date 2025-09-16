'use client'

interface GameCardProps {
  header_path: string,
  name: string
}

export const GameCard = ({ header_path, name }: GameCardProps) => {

  return (
    <div className="relative m-[3px] h-[130px] w-[280px] overflow-hidden rounded-md">
      <div className="h-full w-full">
        <img
          loading="lazy"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "/instantpc_logo_white.png";
          }}
          src={header_path || "/instantpc_logo_white.png"}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
