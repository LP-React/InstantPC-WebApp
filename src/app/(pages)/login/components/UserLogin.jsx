'use client'
import { useState } from "react"
import Link from "next/link"
import axios from "axios"

export const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('https://localhost:7140/api/auth/login', {
        email,
        password
      })

      console.log("✅ Login exitoso:", res.data)
    } catch (err) {
      console.error("❌ Error de login:", err)
      setError("Correo o contraseña incorrectos")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-slate-950 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div className="flex justify-between items-center text-sm text-gray-600">
            <Link href="/forgot-password" className="hover:text-pink-500 transition">¿Olvidaste tu contraseña?</Link>
            <Link href="/register" className="hover:text-pink-500 transition">Crear cuenta</Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}
