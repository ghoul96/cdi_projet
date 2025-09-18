from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

# Import routes
from .routes.users import router as users_router
from .routes.posts import router as posts_router
from .routes.comments import router as comments_router

app = FastAPI(title="CDI Project API", version="1.0.0")

# CORS middleware to allow React frontend to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://frontend:80"],  # React app URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users_router)
app.include_router(posts_router)
app.include_router(comments_router)

# Database connection
DATABASE_PATH = "/app/data/app.db"

def get_db_connection():
    """Get database connection"""
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row  # This enables column access by name
    return conn

# Root endpoint
@app.get("/")
async def root():
    return {"message": "CDI Project API", "version": "1.0.0"}

# Health check
@app.get("/health")
async def health_check():
    try:
        conn = get_db_connection()
        conn.execute("SELECT 1")
        conn.close()
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)