"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Errors = {
  name?: string;
  email?: string;
  password?: string;
}

const Register = () => {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const[error, setError] = useState<Errors>({})
  const[message, setMessage] = useState('')
  const[messageType] = useState<"success" | "error" | null>(null)

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors: Errors = {}

    if(!name) errors.name = "PREENCHA O CAMPO NOME"
    if(!email) errors.email = "PREENCHA O CAMPO EMAIL"
    if(!password) errors.password = "PREENCHA O CAMPO SENHA"

    if(Object.keys(errors).length > 0){
      setError(errors)
      return
    }

    axios.post('http://localhost:3001/api/users/register', {name, email,password})
    .then(result => {
      console.log(result);
      setMessage("Usuário cadastrado com sucesso!")
      setTimeout(()=>{
        router.push('/login')
      }, 1000)
      
    })
  }

  return (
    <div className="h-screen bg-gradient-to-br bg-[#1a1c1f] flex justify-center items-center w-full">
      <form method="POST" action="#" onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Cadastro
            </h1>

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-400">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full"
                type="text"
                name={name}
                placeholder="Nome"
                onChange={(e) => {
                  setName(e.target.value)
                  if (error.name) setError(prev => ({ ...prev, name: undefined }))
                }}/>
            </div>
            {error.name && <p className="text-sm font-bold text-red-600">{error.name}</p>}


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
                name={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (error.email) setError(prev => ({ ...prev, email: undefined }))
                }}
                

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
                name={password}
                id=""
                placeholder="Senha"
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (error.password) setError(prev => ({ ...prev, password: undefined }))
                }}
                
              />
            </div>
            {error.password && <p className="text-sm font-bold text-red-600">{error.password}</p>}

          </div>
          <button
            type="submit"
            value="login"
            id="login"
            className="mt-6 w-full cursor-pointer shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
          >
            Cadastrar
          </button>
          {message && (
            <p className={`text-sm mt-4 text-center font-bold ${messageType === "success" ? "text-red-500" : "text-green-500"}`}>
              {message}
            </p>
          )}
        </div>
          
      </form>
    </div>
  );
}

export default Register