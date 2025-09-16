"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://localhost:7140/api/auth/login", {
        email,
        password,
      });

      console.log("✅ Login exitoso:", res.data);
    } catch (err) {
      console.error("❌ Error de login:", err);
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-800 to-slate-950 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Iniciar sesión
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <div className="flex items-center justify-between text-sm text-gray-600">
            <Link
              href="/forgot-password"
              className="transition hover:text-pink-500"
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <Link href="/register" className="transition hover:text-pink-500">
              Crear cuenta
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition duration-200 hover:bg-pink-600"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
