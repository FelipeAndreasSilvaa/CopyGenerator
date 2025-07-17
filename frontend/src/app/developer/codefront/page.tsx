"use client"

import { useState } from "react"

export default function GerarCodigoFrontend() {
  const [prompt, setPrompt] = useState("")
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGerar = async () => {
    if (!prompt.trim()) return; // não faz nada se estiver vazio
  
    setLoading(true);
    setCode(""); // limpa código anterior
  
    try {
      const res = await fetch("http://localhost:3001/api/ia/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, categoria: "dev" }),
      });
  
      const data = await res.json();
      setCode(data.code || "// Erro ao gerar código.");
    } catch (err) {
      setCode("// Erro ao se conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleCopiar = () => {
    if(code){
      navigator.clipboard.writeText(code)
      alert("Código copiado!")

    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Gerar Código Frontend</h1>

      <div className="flex flex-col gap-6">
        {/* Prompt + Botão */}
        <div className="flex flex-col gap-4">
          <label className="text-sm text-zinc-400">
            Descreva o que deseja gerar:
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={8}
            className="bg-zinc-800 text-white p-4 rounded-xl border border-zinc-700 outline-none resize-none"
            placeholder="Ex: Criar um botão com ícone e texto em Tailwind..."
          />
          <button
            onClick={handleGerar}
            className="bg-violet-600 cursor-pointer hover:bg-violet-500 text-white py-2 rounded-xl"
          >
            Gerar Código
          </button>
        </div>

        <div className="relative">
          <label className="text-sm text-zinc-400">Código Gerado:</label>

          {/* Botão de copiar */}
          <button
            onClick={handleCopiar}
            className="absolute top-0 right-0 mt-6 mr-4 text-zinc-400 hover:text-white"
            title="Copiar código"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          </button>

          <pre className="bg-zinc-800 text-green-400 p-4 rounded-xl overflow-auto text-sm leading-relaxed min-h-[250px] border border-zinc-700">
            {code || "// O código gerado será exibido aqui..."}
          </pre>
        </div>
      </div>
    </div>
  );
}
