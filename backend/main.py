from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai_service import analyze_need_text
from matcher import match_resources

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://care-compass-jum04ysk7-ck2578947252-1408s-projects.vercel.app/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    need_text: str
    location: str = "Merced, CA"
    low_cost_only: bool = False
    open_now_only: bool = False

@app.get("/")
def root():
    return {"message": "CareCompass backend is running"}

@app.post("/analyze")
def analyze(req: AnalyzeRequest):
    ai_result = analyze_need_text(req.need_text, req.location)
    matched = match_resources(
        ai_result,
        low_cost_only=req.low_cost_only,
        open_now_only=req.open_now_only
    )

    return {
        "triage": {
            "urgency": ai_result["urgency"],
            "emergency": ai_result["emergency"],
            "summary": ai_result["summary"]
        },
        "results": matched
    }
