"use client"

import { useState } from "react"

const GatilhosMentais = () => {
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
            body: JSON.stringify({ prompt, categoria: "marketing" }),
          });
      
          const data = await res.json();
          setCode(data.code || "// Erro ao gerar código.");
        } catch (err) {
          setCode("// Erro ao se conectar com o servidor.");
        } finally {
          setLoading(false);
        }
      };

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Gerar copy de gatilhos mentais</h1>

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
            placeholder="Ex: Crie um gatilhos mentais para um nicho de emagrecimento"
          />
          <button
            onClick={handleGerar}
            className="bg-violet-600 cursor-pointer hover:bg-violet-500 text-white py-2 rounded-xl"
          >
            Gerar Gatilho
          </button>
        </div>

        <div className="relative">
          <label className="text-sm text-zinc-400">Gatilho Gerado:</label>
          <pre className="bg-zinc-800 text-green-400 p-4 rounded-xl overflow-auto text-sm leading-relaxed min-h-[250px] border border-zinc-700">
            {code || "// O gatilho gerado será exibido aqui..."}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default GatilhosMentais