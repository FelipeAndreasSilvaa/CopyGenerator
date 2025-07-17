"use client"

import { useState } from "react"

export default function GerarSVGICONE() {
  const [prompt, setPrompt] = useState("")
  const [modo, setModo] = useState<"codigo" | "imagem">("codigo")
  const [svg, setSvg] = useState("")
  const [imagemURL, setImagemURL] = useState("")
  const [code, setCode] = useState("")


  const handleGerar = async () => {
    if (!prompt.trim()) return;
  
    if (modo === 'codigo') {
      try {
        const response = await fetch("http://localhost:3001/api/ia/code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt, categoria: "dev" }),
        });
  
        const data = await response.json();
  
        if (data.success) {
          // 🔽 Aqui vamos filtrar e extrair apenas o SVG
          const match = data.code.match(/<svg[\s\S]*?<\/svg>/i); // Extrai só o conteúdo do SVG
          const onlySvg = match ? match[0].trim() : "// Nenhum SVG encontrado.";
  
          setSvg(onlySvg);
          setImagemURL("");
        } else {
          setSvg("// Erro ao gerar código SVG");
        }
  
      } catch (error) {
        console.error(error);
        setSvg("// Erro ao comunicar com a API");
      }
    } else {
        try {
          const response = await fetch("http://localhost:3001/api/ia/image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
          });

          const data = await response.json();
          if (data.success) {
            setImagemURL(data.url);
            setSvg("");
          } else {
            setImagemURL("");
          }
        } catch (err) {
          console.error(err);
          setImagemURL("");
        }
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
      <h1 className="text-3xl font-bold mb-6">Gerar SVG / Ícone</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Entrada */}
        <div className="flex flex-col gap-4">
          <label className="text-sm text-zinc-400">
            Descreva o ícone que deseja gerar:
          </label>
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
              <p className="text-zinc-500 text-sm">
                O resultado aparecerá aqui...
              </p>
            )}
          </div>

          {/* Código visível para copiar */}
          {modo === "codigo" && svg && (
            <div>
              <label className="text-sm text-zinc-400 mb-1 block">
                Código HTML:
              </label>

              <div className="relative">
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

                <pre className="bg-zinc-800 text-green-400 text-sm p-4 rounded-xl overflow-auto border border-zinc-700 whitespace-pre-wrap">
                  {svg}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
