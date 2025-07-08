"use client"

import { useState } from "react"

export default function GerarSVGICONE() {
  const [prompt, setPrompt] = useState("")
  const [modo, setModo] = useState<"codigo" | "imagem">("codigo")
  const [svg, setSvg] = useState("")
  const [imagemURL, setImagemURL] = useState("")

  const handleGerar = () => {
    if (modo === "codigo") {
      const exemploSVG = `
<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
  <path d="M12 2L15 8H9L12 2Z" />
  <circle cx="12" cy="14" r="4" />
</svg>
      `
      setSvg(exemploSVG.trim())
      setImagemURL("")
    } else {
      const fakeURL = "https://placehold.co/256x256.svg?text=SVG+Gerado"
      setImagemURL(fakeURL)
      setSvg("")
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Gerar SVG / Ícone</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Entrada */}
        <div className="flex flex-col gap-4">
          <label className="text-sm text-zinc-400">Descreva o ícone que deseja gerar:</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={6}
            className="bg-zinc-800 text-white p-4 rounded-xl border border-zinc-700 outline-none resize-none"
            placeholder="Ex: ícone de câmera fotográfica estilizado"
          />

          {/* Botões de opção */}
          <div className="flex gap-2">
            <button
              onClick={() => setModo("codigo")}
              className={`px-4 py-2 rounded-xl text-sm ${
                modo === "codigo" ? "bg-violet-600" : "bg-zinc-700"
              }`}
            >
              Gerar Código Ícone
            </button>
            <button
              onClick={() => setModo("imagem")}
              className={`px-4 py-2 rounded-xl text-sm ${
                modo === "imagem" ? "bg-violet-600" : "bg-zinc-700"
              }`}
            >
              Gerar Imagem SVG
            </button>
          </div>

          <button
            onClick={handleGerar}
            className="mt-2 bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-xl w-fit"
          >
            Gerar
          </button>
        </div>

        {/* Resultado */}
        <div className="flex flex-col gap-4">
          <label className="text-sm text-zinc-400">Resultado:</label>

          {/* Visualização */}
          <div className="bg-zinc-800 p-4 rounded-xl min-h-[150px] border border-zinc-700 flex items-center justify-center">
            {modo === "codigo" && svg ? (
              <div dangerouslySetInnerHTML={{ __html: svg }} />
            ) : modo === "imagem" && imagemURL ? (
              <img src={imagemURL} alt="SVG Gerado" className="max-h-[200px]" />
            ) : (
              <p className="text-zinc-500 text-sm">O resultado aparecerá aqui...</p>
            )}
          </div>

          {/* Código visível para copiar */}
          {modo === "codigo" && svg && (
            <div>
              <label className="text-sm text-zinc-400 mb-1 block">Código HTML:</label>
              <pre className="bg-zinc-800 text-green-400 text-sm p-4 rounded-xl overflow-auto border border-zinc-700 whitespace-pre-wrap">
                {svg}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
