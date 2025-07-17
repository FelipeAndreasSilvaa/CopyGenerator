from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.imagemService import gerar_imagem_ia

router = APIRouter()

class ImagePrompt(BaseModel):
    prompt: str

@router.post("/")
async def gerar_imagem(prompt: ImagePrompt):
    try:
        url = await gerar_imagem_ia(prompt.prompt)
        return {"success": True, "url": url}
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
