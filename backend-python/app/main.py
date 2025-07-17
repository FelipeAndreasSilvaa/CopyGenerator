from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.codeGenerator import router as code_router
from app.routes.imagemGenerator import router as image_router


app = FastAPI()

# Libera CORS para o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ou ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registra as rotas
app.include_router(code_router, prefix="/api/code")
app.include_router(image_router, prefix="/api/image")


@app.get("/")
def read_root():
    
    return {"message": "API Python rodando"}
