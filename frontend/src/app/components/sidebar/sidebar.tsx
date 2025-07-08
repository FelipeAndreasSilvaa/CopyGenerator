import React from 'react'
import Link from 'next/link'

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 overflow-hidden hidden md:flex flex-col`}
    >
      <div className="flex items-center justify-center h-16 bg-black">
        {isOpen && (
          <span className="text-white font-bold uppercase">Dashboard</span>
        )}
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-black space-y-2">
          {/* Exemplo de item de menu */}
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                isOpen ? "h-6 w-6 mr-3" : "h-12 w-12 mx-auto"
              } transition-all duration-200`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            {isOpen && <span className="text-base">Code Generator</span>}
          </Link>

          {/* ...outros itens... */}
        </nav>
      </div>
    </div>
  );
}

export default SideBar
