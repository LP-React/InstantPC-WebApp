'use client'
import { useEffect, useState } from "react";

interface Props {
  header_path: string;
  name: string;
}

export const GameCard = ({ header_path, name }: Props) => {
  // const [gameData, setGameData] = useState({});

  // useEffect(() => {
  //   const fetchSteamDetails = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5158/api/steam/${idGame}`,
  //       );
  //       const json = await response.json();
  //       const gameKey = Object.keys(json)[0]; // e.g., "2205950"
  //       const gameData = json[gameKey]?.data;

  //       setGameData(gameData);
  //     } catch (err) {
  //       console.error("Error al obtener detalles de Steam:", err);
  //     }
  //   };

  //   fetchSteamDetails();
  // }, [idGame]);

  // if (!gameData) {
  //   return;
  // }

  return (
    <div className="relative m-2 h-[130px] w-[280px] overflow-hidden rounded-md transition-all duration-250 ease-in-out hover:scale-105">
      <div className="h-full w-full">
        <img
          loading="lazy"
          onError={(e) => {
            e.target.src = "/instantpc_logo_white.png";
          }}
          src={header_path || "/instantpc_logo_white.png"}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      {/* <div className="absolute bottom-0 w-full flex justify-center">
                <span className="text-white">{steamName}</span>
            </div> */}
    </div>
  );
};
