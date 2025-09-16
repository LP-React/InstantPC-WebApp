"use client";
import { useState } from "react";
import axios from "axios";

const countries = [
  { id: 1, name: "Argentina" },
  { id: 2, name: "Bolivia" },
  { id: 3, name: "Brazil" },
  { id: 4, name: "Chile" },
  { id: 5, name: "Colombia" },
  { id: 6, name: "Ecuador" },
  { id: 7, name: "Paraguay" },
  { id: 8, name: "Peru" },
  { id: 9, name: "Uruguay" },
  { id: 10, name: "Venezuela" },
];

const departments = [
  { id: 1, name: "Buenos Aires", countryId: 1 },
  { id: 2, name: "Córdoba", countryId: 1 },
  { id: 3, name: "Santa Fe", countryId: 1 },
  { id: 4, name: "Mendoza", countryId: 1 },
  { id: 5, name: "Tucumán", countryId: 1 },
  { id: 6, name: "La Paz", countryId: 2 },
  { id: 7, name: "Santa Cruz", countryId: 2 },
  { id: 8, name: "Cochabamba", countryId: 2 },
  { id: 9, name: "Potosí", countryId: 2 },
  { id: 10, name: "Tarija", countryId: 2 },
  { id: 11, name: "São Paulo", countryId: 3 },
  { id: 12, name: "Rio de Janeiro", countryId: 3 },
  { id: 13, name: "Minas Gerais", countryId: 3 },
  { id: 14, name: "Bahia", countryId: 3 },
  { id: 15, name: "Paraná", countryId: 3 },
  { id: 16, name: "Santiago", countryId: 4 },
  { id: 17, name: "Valparaíso", countryId: 4 },
  { id: 18, name: "Biobío", countryId: 4 },
  { id: 19, name: "Antofagasta", countryId: 4 },
  { id: 20, name: "Araucanía", countryId: 4 },
  { id: 21, name: "Bogotá", countryId: 5 },
  { id: 22, name: "Antioquia", countryId: 5 },
  { id: 23, name: "Valle del Cauca", countryId: 5 },
  { id: 24, name: "Santander", countryId: 5 },
  { id: 25, name: "Atlántico", countryId: 5 },
  { id: 26, name: "Pichincha", countryId: 6 },
  { id: 27, name: "Guayas", countryId: 6 },
  { id: 28, name: "Azuay", countryId: 6 },
  { id: 29, name: "Manabí", countryId: 6 },
  { id: 30, name: "Tungurahua", countryId: 6 },
  { id: 31, name: "Asunción", countryId: 7 },
  { id: 32, name: "Central", countryId: 7 },
  { id: 33, name: "Alto Paraná", countryId: 7 },
  { id: 34, name: "Itapúa", countryId: 7 },
  { id: 35, name: "Caaguazú", countryId: 7 },
  { id: 36, name: "Lima", countryId: 8 },
  { id: 37, name: "Arequipa", countryId: 8 },
  { id: 38, name: "Cusco", countryId: 8 },
  { id: 39, name: "La Libertad", countryId: 8 },
  { id: 40, name: "Piura", countryId: 8 },
  { id: 41, name: "Montevideo", countryId: 9 },
  { id: 42, name: "Canelones", countryId: 9 },
  { id: 43, name: "Maldonado", countryId: 9 },
  { id: 44, name: "Salto", countryId: 9 },
  { id: 45, name: "Paysandú", countryId: 9 },
  { id: 46, name: "Caracas", countryId: 10 },
  { id: 47, name: "Zulia", countryId: 10 },
  { id: 48, name: "Lara", countryId: 10 },
  { id: 49, name: "Bolívar", countryId: 10 },
  { id: 50, name: "Anzoátegui", countryId: 10 },
];

export const UserRegister = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    countryId: "",
    departmentId: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      roleId: 2,
      notifications: false,
      active: true,
      countryId: parseInt(form.countryId),
      departmentId: parseInt(form.departmentId),
    };

    try {
      await axios.post("https://localhost:7140/api/Users", payload);
      alert("✅ Usuario creado");
    } catch (err) {
      console.error(err);
      alert("❌ Error");
    }
  };

  const filteredDepartments = departments.filter(
    (dep) => dep.countryId === parseInt(form.countryId),
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
          Crear Cuenta
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="text"
            name="phone"
            placeholder="Teléfono"
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />

          <select
            name="countryId"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un país</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>

          <select
            name="departmentId"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            onChange={handleChange}
            required
            disabled={!form.countryId}
          >
            <option value="">Selecciona un departamento</option>
            {filteredDepartments.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white transition duration-300 hover:bg-pink-700"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-pink-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};
