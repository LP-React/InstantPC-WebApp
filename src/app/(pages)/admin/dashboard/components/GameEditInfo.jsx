'use client'
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
                    axios.get(`https://localhost:7140/api/Platforms`)
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
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handlePlatformChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, opt => parseInt(opt.value));
        setGame((prev) => ({
            ...prev,
            platformIds: selectedOptions
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
                platformIds: game.platformIds || []
            });
            if (onSave) onSave();
            onClose();
        } catch (err) {
            console.error("❌ Error al guardar cambios:", err);
        }
    };

    if (!game) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-2xl rounded-xl p-8 shadow-2xl relative space-y-5"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">✏️ Editar Juego</h2>

                <div className="flex flex-col gap-3">
                    <label className="text-sm font-semibold">Steam ID</label>
                    <input
                        type="number"
                        name="steamId"
                        value={game.steamId}
                        onChange={handleChange}
                        className="border rounded-lg px-4 py-2"
                    />

                    <label className="text-sm font-semibold flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="active"
                            checked={game.active}
                            onChange={handleChange}
                        />
                        Activo
                    </label>

                    <label className="text-sm font-semibold flex items-center gap-2">
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
                        className="border rounded-lg px-4 py-2 h-32"
                        value={game.platformIds || []}
                        onChange={handlePlatformChange}
                    >
                        {platformsList.map(platform => (
                            <option key={platform.id} value={platform.id}>
                                {platform.name}
                            </option>
                        ))}
                    </select>

                    <label className="text-sm font-semibold flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="available"
                            checked={game.available}
                            onChange={handleChange}
                        />
                        Disponible
                    </label>

                </div>

                <div className="flex justify-between mt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                        Guardar cambios
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
                >
                    ×
                </button>
            </form>
        </div>
    );
};
