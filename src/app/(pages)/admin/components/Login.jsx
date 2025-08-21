'use client'
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://localhost:7140/api/auth/login", {
                email: username,
                password: password
            })

            if (res.data.roleId !== 1) {
                setError("⚠️ No tienes permisos de administrador")
                return
            }

            // ✅ Guardar sesión si deseas
            localStorage.setItem("adminUser", JSON.stringify(res.data))

            // ✅ Redirigir al Dashboard
            router.push("/admin/dashboard")
        } catch (err) {
            console.error("❌ Error al iniciar sesión:", err)
            setError("Credenciales incorrectas o acceso denegado")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-5 text-gray-800">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario / Correo</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="admin@instantpc.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};
