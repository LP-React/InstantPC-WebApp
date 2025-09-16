"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export const GameInfo = ({ gameId, onClose }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axios.get(
          `https://localhost:7140/api/Games/${gameId}`,
        );
        setGame(res.data);
      } catch (err) {
        console.error("Error al obtener juego:", err);
      }
    };

    if (gameId) fetchGame();
  }, [gameId]);

  if (!game) return null;

  return (
    <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">
      <div className="relative flex w-[90%] max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
        {/* Icono del juego */}
        <div className="flex items-center justify-center bg-gray-900 p-4 md:w-1/3">
          <img
            src={`http://localhost:5158/images/steam/${game.steamId}.jpg`}
            alt={game.steamId}
            className="h-auto w-full rounded-xl"
            onError={(e) => (e.target.src = "/instantpc_logo_white.png")}
          />
        </div>

        {/* Información */}
        <div className="space-y-3 p-6 md:w-2/3">
          <p className="text-sm text-gray-600">
            <strong>Steam ID:</strong> {game.steamId}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Estado:</strong> {game.active ? "Activo" : "Inactivo"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Coming Soon:</strong> {game.comingSoon ? "Sí" : "No"}
          </p>
          {game.platforms && (
            <p className="text-sm text-gray-600">
              <strong>Plataformas:</strong>{" "}
              {game.platforms.map((p) => p.name).join(", ")}
            </p>
          )}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
};
