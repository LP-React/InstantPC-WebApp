"use client";
import { GameInfo } from "./GameInfo";
import { GameEditInfo } from "./GameEditInfo";
import { useEffect, useState } from "react";
import axios from "axios";

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [editingGameId, setEditingGameId] = useState(null);

  const fetchGames = async () => {
    try {
      const res = await axios.get("https://localhost:7140/api/games");
      setGames(res.data);
    } catch (err) {
      console.error("Error al obtener juegos:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`https://localhost:7140/api/games/${id}`, {
        active: false,
      });
      fetchGames();
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">📋 Lista de Juegos</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex items-center rounded-xl bg-gray-800 p-4 text-white shadow-md"
          >
            <img
              src={`http://localhost:5158/images/steam/${game.steamId}.jpg`}
              alt={game.steamId}
              className="mr-4 h-36 w-24 rounded-md object-cover"
              onError={(e) => (e.target.src = "/instantpc_logo_white.png")}
            />
            <div className="flex-1">
              <p className="mb-2 font-semibold">SteamID: {game.steamId}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    if (confirm("¿Estás seguro de desactivar este juego?")) {
                      handleDelete(game.id);
                    }
                  }}
                  className="rounded bg-red-500 px-3 py-1 text-sm hover:bg-red-600"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setEditingGameId(game.id)}
                  className="rounded bg-yellow-500 px-3 py-1 text-sm hover:bg-yellow-600"
                >
                  Editar
                </button>

                <button
                  className="rounded bg-blue-500 px-3 py-1 text-sm hover:bg-blue-600"
                  onClick={() => setSelectedGameId(game.id)}
                >
                  Ver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedGameId && (
        <GameInfo
          gameId={selectedGameId}
          onClose={() => setSelectedGameId(null)}
        />
      )}
      {editingGameId && (
        <GameEditInfo
          gameId={editingGameId}
          onClose={() => setEditingGameId(null)}
          onSave={() => {
            fetchGames(); // recarga lista
            setEditingGameId(null);
          }}
        />
      )}
    </div>
  );
};
