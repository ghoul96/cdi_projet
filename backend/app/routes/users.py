"""
User authentication and management routes
"""
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from ..models.database import DatabaseManager, UserModel
from ..main import hash_password, verify_password, create_access_token, verify_token

router = APIRouter(prefix="/users", tags=["users"])

# Initialize database models
db_manager = DatabaseManager()
user_model = UserModel(db_manager)

class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    bio: str = None

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    bio: str = None
    created_at: str

@router.post("/register", response_model=dict)
async def register_user(user: UserCreate):
    """Register a new user"""
    # Check if user already exists
    existing_user = user_model.get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password and create user
    password_hash = hash_password(user.password)
    try:
        user_id = user_model.create_user(
            name=user.name,
            email=user.email,
            password_hash=password_hash,
            bio=user.bio
        )
        
        # Create access token
        access_token = create_access_token(data={"sub": user_id})
        
        return {
            "message": "User created successfully",
            "user_id": user_id,
            "access_token": access_token,
            "token_type": "bearer"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create user: {str(e)}")

@router.post("/login", response_model=dict)
async def login_user(user: UserLogin):
    """Login user and return access token"""
    # Get user by email
    db_user = user_model.get_user_by_email(user.email)
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Verify password
    if not verify_password(user.password, db_user['password']):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Create access token
    access_token = create_access_token(data={"sub": db_user['id']})
    
    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": db_user['id'],
            "name": db_user['name'],
            "email": db_user['email'],
            "bio": db_user['bio']
        }
    }

@router.get("/me", response_model=UserResponse)
async def get_current_user(current_user_id: int = Depends(verify_token)):
    """Get current user information"""
    user = user_model.get_user_by_id(current_user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserResponse(
        id=user['id'],
        name=user['name'],
        email=user['email'],
        bio=user['bio'],
        created_at=user['created_at']
    )

@router.get("/", response_model=List[UserResponse])
async def get_all_users():
    """Get all users (public endpoint)"""
    users = user_model.get_all_users()
    return [
        UserResponse(
            id=user['id'],
            name=user['name'],
            email=user['email'],
            bio=user['bio'],
            created_at=user['created_at']
        ) for user in users
    ]

@router.get("/{user_id}", response_model=UserResponse)
async def get_user_by_id(user_id: int):
    """Get user by ID"""
    user = user_model.get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserResponse(
        id=user['id'],
        name=user['name'],
        email=user['email'],
        bio=user['bio'],
        created_at=user['created_at']
    )