from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI(title="Vasuki Founder API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "founder.db"


def query_founder(question: str):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    rows = conn.execute(
        """
        SELECT answer
        FROM founder_truths
        ORDER BY confidence DESC
        """
    ).fetchall()

    conn.close()

    q = question.lower()

    for row in rows:
        answer = row["answer"]

        if "vasuki" in q and "vasuki" in answer.lower():
            return answer

        if "manidhar" in q and "manidhar" in answer.lower():
            return answer

        if "project" in q and (
            "janani" in answer.lower()
            or "aim1000" in answer.lower()
            or "vasuki" in answer.lower()
        ):
            return answer

    return "I don't have enough founder memory yet."


@app.get("/api/query")
def ask(q: str):

    answer = query_founder(q)

    return {
        "question": q,
        "answer": answer,
        "source": "founder.db"
    }
