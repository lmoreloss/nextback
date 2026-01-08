"use client";

import { useState } from "react";
import FooterDigital from "../../../components/FooterDigital";
import NavBarDigital from "../../../components/NavBarDigital";

export default function funcion() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState(""); // loading | success | error

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your actual Strapi URL
      const STRAPI_URL =
        process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

      const response = await fetch(`${STRAPI_URL}/api/correos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Nombre: formData.nombre,
            Correo: formData.correo,
            Mensaje: formData.mensaje,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar");
      }

      setStatus("success");
      setFormData({ nombre: "", correo: "", mensaje: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <div className="bg-[linear-gradient(to_right,#0172bf,#00ade5,#0172bf)] h-auto min-h-screen">
      <NavBarDigital></NavBarDigital>
      <div className="pt-24"></div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-3xl mx-auto flex-col items-center text-sm text-slate-800 bg-black/20 rounded-4xl"
      >
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Contactanos
        </p>
        <h1 className="text-4xl px-2 font-bold py-4 text-center text-slate-200">
          ¿En que te podemos ayudar?
        </h1>

        <div className="max-w-96 pb-4 w-full px-4 ">
          <label htmlFor="name" className="font-medium text-slate-300">
            Nombre o Razon social
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-200 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                fill="#ccccccff"
              />
            </svg>
            <input
              type="text"
              className="h-full px-2 w-full outline-none bg-transparent text-slate-200"
              placeholder="Juan Perez"
              value={formData.nombre}
              name="nombre"
              onChange={handleChange}
              required
            />
          </div>

          <label
            htmlFor="email-address"
            className="font-medium mt-4 text-slate-300"
          >
            Direccion de correo electronico
          </label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-200 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                fill="#ccccccff"
              />
            </svg>
            <input
              type="email"
              className="h-full px-2 w-full outline-none bg-transparent text-slate-200"
              placeholder="ejemplo@dominio.com"
              value={formData.correo}
              name="correo"
              onChange={handleChange}
              required
            />
          </div>

          <label htmlFor="message" className="font-medium mt-4 text-slate-300">
            Tu mensaje
          </label>
          <textarea
            rows={4}
            className="w-full mt-2 p-2 bg-transparent text-slate-200 border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
            placeholder="Queremos multiples pantallas..."
            value={formData.mensaje}
            name="mensaje"
            onChange={handleChange}
            required
          ></textarea>

          <button
            disabled={
              status === "loading" || status === "success" || status === "error"
            }
            type="submit"
            className={`
    flex items-center justify-center gap-1 mt-5 py-2.5 w-full rounded-full transition text-white
    ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}
    ${status === "error" ? "bg-red-500 hover:bg-red-600" : ""}
    ${
      status === "" || status === "loading"
        ? "bg-indigo-500 hover:bg-indigo-600"
        : ""
    }
    ${
      status === "success" || status === "error"
        ? "cursor-not-allowed opacity-100"
        : ""
    }
  `}
          >
            {/* 4. Dynamic Text */}
            {status === "loading" && "Enviando..."}
            {status === "success" && "Mensaje enviado. Te contactaremos"}
            {status === "error" && "Error al enviar"}
            {status === "" && "Enviar"}

            {/* 5. Icon: Only show when status is empty (idle) */}
            <svg
              className={`mt-0.5 ${status !== "" ? "hidden" : "block"}`}
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </form>
      <FooterDigital></FooterDigital>
    </div>
  );
}
