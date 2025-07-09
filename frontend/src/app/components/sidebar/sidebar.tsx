import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LoginIcon from '../icons/Login'
import RegisterIcon from '../icons/Register'

const SideBar = ({ isOpen }: { isOpen: boolean }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoggedIn(!!storedUser); // true se user existir
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 overflow-hidden flex flex-col`}
    >
      <div className="flex items-center justify-center h-16 bg-black">
        {isOpen && (
          <span className="text-white font-bold uppercase">Dashboard</span>
        )}
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-black space-y-2">

        {!isLoggedIn && (
            <>
              <Link
                href={"/login"}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <LoginIcon isOpen={isOpen} />
                {isOpen && <span className="text-base">Login</span>}
              </Link>

              <Link
                href={"/register"}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <RegisterIcon isOpen={isOpen} />
                {isOpen && <span className="text-base">Cadastro</span>}
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

export default SideBar
