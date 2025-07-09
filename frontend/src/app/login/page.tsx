"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Errors = {
  name?: string;
  email?: string;
  password?: string;
}

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<Errors>({})
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const res = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
  
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setMessage("Login feito com sucesso!");
      setMessageType("success");       // <-- aqui setando sucesso

      setTimeout(()=>{
        router.push('/')
      }, 1000)
    } else {
      setMessage(data.message); // <-- Aqui vem "Usuário não encontrado", por exemplo
      setMessageType("error");
    }
  };
  

  return (
    <div className="h-screen bg-gradient-to-br bg-[#1a1c1f] flex justify-center items-center w-full">
      <form method="POST" action="#" onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Login
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            {error.email && <p className="text-sm font-bold text-red-600">{error.email}</p>}

            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            {error.password && <p className="text-sm font-bold text-red-600">{error.password}</p>}

          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <input
                type="checkbox"
                id="rememberMeCheckbox"
                name="rememberMe"
                className="mr-2"
              />
              <span className="text-xs font-semibold">Remember me?</span>
            </p>
          </div>

          <button
            type="submit"
            value="login"
            id="login"
            className="mt-6 w-full cursor-pointer shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Login
          </button>
          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">
                You don't have an account?
                <Link
                  href={'/register'}
                  className="text-xs ml-2 text-blue-500 font-semibold"
                >
                  Register now &rarr;
                </Link>
              </span>
            </p>
          </div>
          {message && (
            <p className={`text-sm mt-4 text-center font-bold ${messageType === "error" ? "text-red-500" : "text-green-500"}`}>
              {message}
            </p>
          )}


        </div>
      </form>
    </div>
  )
}

export default Login