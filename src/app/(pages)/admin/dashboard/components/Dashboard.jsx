'use client'
import Link from "next/link"

export const Dashboard = () => {
  return (
    <div className=" bg-slate-900 text-white p-6 pt-22">
      <h1 className="text-4xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sección Juegos */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">🎮 Gestión de Juegos</h2>
          <ul className="space-y-3">
            <li><Link href="/admin/games/create" className="text-pink-400 hover:underline">➕ Insertar nuevo juego</Link></li>
            <li><Link href="/admin/games/list" className="text-pink-400 hover:underline">📝 Actualizar o eliminar juegos</Link></li>
          </ul>
        </div>

        {/* Sección Usuarios */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">👤 Gestión de Usuarios</h2>
          <ul className="space-y-3">
            <li><Link href="/admin/users/create" className="text-pink-400 hover:underline">➕ Registrar nuevo usuario</Link></li>
            <li><Link href="/admin/users/list" className="text-pink-400 hover:underline">📝 Actualizar o eliminar usuarios</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
