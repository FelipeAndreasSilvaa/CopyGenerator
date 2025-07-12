from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.openaiServices import gerar_codigo_ia  # Ajuste no import

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str

@router.post("/")
async def gerar_codigo(request: PromptRequest):
    print("Prompt recebido:", request.prompt)

    try:
        # Função gerar_codigo_ia é síncrona, não precisa de await
        codigo = gerar_codigo_ia(request.prompt)
        return {"success": True, "code": codigo}
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
