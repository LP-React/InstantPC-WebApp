'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export const GameInfo = ({ gameId, onClose }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axios.get(`https://localhost:7140/api/Games/${gameId}`);
        setGame(res.data);
      } catch (err) {
        console.error("Error al obtener juego:", err);
      }
    };

    if (gameId) fetchGame();
  }, [gameId]);

  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="relative bg-white w-[90%] max-w-3xl rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Icono del juego */}
        <div className="md:w-1/3 bg-gray-900 p-4 flex items-center justify-center">
          <img
            src={`http://localhost:5158/images/steam/${game.steamId}.jpg`}
            alt={game.steamId}
            className="w-full h-auto rounded-xl"
            onError={(e) => e.target.src = "/instantpc_logo_white.png"}
          />
        </div>

        {/* Información */}
        <div className="md:w-2/3 p-6 space-y-3">
          <p className="text-sm text-gray-600"><strong>Steam ID:</strong> {game.steamId}</p>
          <p className="text-sm text-gray-600"><strong>Estado:</strong> {game.active ? "Activo" : "Inactivo"}</p>
          <p className="text-sm text-gray-600"><strong>Coming Soon:</strong> {game.comingSoon ? "Sí" : "No"}</p>
          {game.platforms && (
            <p className="text-sm text-gray-600"><strong>Plataformas:</strong> {game.platforms.map(p => p.name).join(', ')}</p>
          )}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
};
