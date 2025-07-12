import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def gerar_codigo_ia(prompt: str) -> str:
    system_prompt = (
        "Você é um especialista em gerar códigos para ajudar a programadores"
        "Gere somente código, com explicações passo a passo de como fazer, e com indentação e espaçamento corretos para fácil cópia e colagem."
    )

    # Use modelo válido disponível para você, por exemplo 'gemini-2.0-flash'
    model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

    response = model.generate_content(
        [system_prompt, prompt],
        generation_config={
            "temperature": 0.7,
            "max_output_tokens": 1000,
        }
    )
    return response.text
