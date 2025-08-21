'use client'
import { GameInfo } from './GameInfo'
import { GameEditInfo } from './GameEditInfo'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const GameList = () => {
  const [games, setGames] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [editingGameId, setEditingGameId] = useState(null);



  const fetchGames = async () => {
    try {
      const res = await axios.get('https://localhost:7140/api/games');
      setGames(res.data);
    } catch (err) {
      console.error("Error al obtener juegos:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`https://localhost:7140/api/games/${id}`, { active: false });
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
      <h2 className="text-2xl font-bold mb-4 text-white">📋 Lista de Juegos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {games.map(game => (
          <div key={game.id} className="bg-gray-800 rounded-xl shadow-md p-4 text-white flex items-center">
            <img
              src={`http://localhost:5158/images/steam/${game.steamId}.jpg`}
              alt={game.steamId}
              className="w-24 h-36 object-cover mr-4 rounded-md"
              onError={(e) => e.target.src = '/instantpc_logo_white.png'}
            />
            <div className="flex-1">
              <p className="font-semibold mb-2">SteamID: {game.steamId}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    if (confirm("¿Estás seguro de desactivar este juego?")) {
                      handleDelete(game.id);
                    }
                  }}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setEditingGameId(game.id)}
                  className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded text-sm"
                >
                  Editar
                </button>


                <button
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-sm"
                  onClick={() => setSelectedGameId(game.id)}
                >
                  Ver
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedGameId && <GameInfo gameId={selectedGameId} onClose={() => setSelectedGameId(null)} />}
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
