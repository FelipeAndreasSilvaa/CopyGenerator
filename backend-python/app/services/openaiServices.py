import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

SYSTEM_PROMPT_DEV = (
    "Você é um especialista em gerar código para desenvolvedores."
    "Gere apenas o código solicitado, bem identado e pronto para uso, sem explicações genéricas."
    "Ao receber um pedido, gere o código referente a: "
    "- Frontend (HTML, CSS, JavaScript, React, TailwindCSS); "
    "- Backend (Node.js, Express, Python, APIs); "
    "- SVG ou ícones prontos para uso."
)

SYSTEM_PROMPT_MARKETING = (
    "Você é um especialista em estratégias de Marketing Digital."
    "Gere apenas os conteúdos e estruturas solicitadas, sem mensagens genéricas."
    "Ao receber um pedido, atenda conforme a categoria:"
    "- Copywriting com Gatilhos Mentais: gere textos persuasivos claros e objetivos."
    "- SEO + Análise de Concorrência: análise de concorrentes, palavras-chave relevantes, sugestões estratégicas e melhorias técnicas."
    "- Funil de Vendas: estratégias separadas por etapas (Atração, Nutrição, Conversão, Pós-venda) com exemplos práticos para cada fase."
)


async def gerar_codigo_ia(prompt: str, categoria: str = "dev") -> str:
    system_prompt = SYSTEM_PROMPT_DEV if categoria == "dev" else SYSTEM_PROMPT_MARKETING

    model = genai.GenerativeModel("models/gemini-1.5-flash")

    response = model.generate_content(
        [system_prompt, prompt],
        generation_config={
            "temperature": 0.7,
            "max_output_tokens": 1000,
        }
    )
    return response.text
   