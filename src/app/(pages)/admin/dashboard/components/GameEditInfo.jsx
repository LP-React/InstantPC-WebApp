"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export const GameEditInfo = ({ gameId, onClose, onSave }) => {
  const [game, setGame] = useState(null);
  const [platformsList, setPlatformsList] = useState([]);

  // Cargar el juego y las plataformas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gameRes, platformsRes] = await Promise.all([
          axios.get(`https://localhost:7140/api/Games/${gameId}`),
          axios.get(`https://localhost:7140/api/Platforms`),
        ]);
        setGame(gameRes.data);
        setPlatformsList(platformsRes.data);
      } catch (err) {
        console.error("Error al cargar datos del juego:", err);
      }
    };

    if (gameId) fetchData();
  }, [gameId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGame((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlatformChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (opt) =>
      parseInt(opt.value),
    );
    setGame((prev) => ({
      ...prev,
      platformIds: selectedOptions,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7140/api/Games/${gameId}`, {
        steamId: game.steamId,
        active: game.active,
        comingSoon: game.comingSoon,
        available: game.available,
        platformIds: game.platformIds || [],
      });
      if (onSave) onSave();
      onClose();
    } catch (err) {
      console.error("❌ Error al guardar cambios:", err);
    }
  };

  if (!game) return null;

  return (
    <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-2xl space-y-5 rounded-xl bg-white p-8 shadow-2xl"
      >
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          ✏️ Editar Juego
        </h2>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Steam ID</label>
          <input
            type="number"
            name="steamId"
            value={game.steamId}
            onChange={handleChange}
            className="rounded-lg border px-4 py-2"
          />

          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              name="active"
              checked={game.active}
              onChange={handleChange}
            />
            Activo
          </label>

          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              name="comingSoon"
              checked={game.comingSoon}
              onChange={handleChange}
            />
            Coming Soon
          </label>

          <label className="text-sm font-semibold">Plataformas</label>
          <select
            multiple
            className="h-32 rounded-lg border px-4 py-2"
            value={game.platformIds || []}
            onChange={handlePlatformChange}
          >
            {platformsList.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>

          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              name="available"
              checked={game.available}
              onChange={handleChange}
            />
            Disponible
          </label>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Guardar cambios
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-red-600"
        >
          ×
        </button>
      </form>
    </div>
  );
};
