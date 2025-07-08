"use client"
import Link from "next/link";
import SideBar from "./components/sidebar/sidebar";
import { useState } from "react";

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen">
      <SideBar isOpen={isSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-y-auto bg-black">
        <div className="flex items-center justify-between h-16 bg-black">
          <div className="flex items-center px-4">
            <button onClick={toggleSidebar}  className="text-white focus:outline-none focus:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <input
              className="mx-4 w-full border rounded-md px-4 py-2 bg-white"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center pr-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white mb-6">
            Developer Tools
          </h1>

          <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-center h-14 text-white">
                <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-center text-white mb-2">
                  Gerar Código Frontend
                </h3>
              </div>
              <Link className="text-center" href='/codefront'>
                <button className="mt-4 cursor-pointer w-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
                  Gerar Código
                </button>
              </Link>
             
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-center h-14 text-white">
                <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-center text-white mb-2">
                  Gerar Código Backend
                </h3>
              </div>
              <Link className="text-center" href='/codeback'>
                <button className="mt-4 w-full cursor-pointer bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
                  Gerar Código
                </button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-center h-14 text-white">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
              </svg>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-center text-white mb-2">
                  Gerar SVG / Ícone
                </h3>
              </div>
              <Link className="text-center" href='/codeimage'>
                <button className="mt-4 w-full cursor-pointer bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
                Gerar SVG / Ícone
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 mt-10">
          <h1 className="text-2xl font-bold text-white mb-6">
            Marketing Tools
          </h1>

          <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-center h-14 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>

              <div className="mt-4">
                <h3 className="text-lg text-center font-semibold text-white mb-2">
                  Copy com Gatilhos Mentais
                </h3>
              </div>
              <button className="mt-4 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
               Copy e Gatilhos
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-center h-14 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
              </svg>

              <div className="mt-4">
                <h3 className="text-lg text-center font-semibold text-white mb-2">
                  SEO + Análise de Concorrência
                </h3>
              </div>
              <button className="mt-4 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
                SEO+Análise
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-800 rounded-xl p-5 shadow-md flex flex-col justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-center h-14 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
              </svg>

              <div>
                <h3 className="text-lg text-center font-semibold text-white mb-2">
                  Contruir Funil de Vendas
                </h3>
              </div>
              <button className="mt-4 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm">
                Gerar SVG / Ícone
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
