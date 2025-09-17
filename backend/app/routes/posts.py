"""
Posts management routes
"""
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from ..models.database import DatabaseManager, PostModel
from ..main import verify_token

router = APIRouter(prefix="/posts", tags=["posts"])

# Initialize database models
db_manager = DatabaseManager()
post_model = PostModel(db_manager)

class PostCreate(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None

class PostUpdate(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None

class PostResponse(BaseModel):
    id: int
    user_id: int
    title: str
    content: str
    image_url: Optional[str]
    created_at: str
    updated_at: str
    user_name: str

@router.post("/", response_model=dict)
async def create_post(post: PostCreate, current_user_id: int = Depends(verify_token)):
    """Create a new post"""
    try:
        post_id = post_model.create_post(
            user_id=current_user_id,
            title=post.title,
            content=post.content,
            image_url=post.image_url
        )
        
        return {
            "message": "Post created successfully",
            "post_id": post_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create post: {str(e)}")

@router.get("/", response_model=List[PostResponse])
async def get_all_posts(limit: int = 50, offset: int = 0):
    """Get all posts with pagination"""
    posts = post_model.get_all_posts(limit=limit, offset=offset)
    return [
        PostResponse(
            id=post['id'],
            user_id=post['user_id'],
            title=post['title'],
            content=post['content'],
            image_url=post['image_url'],
            created_at=post['created_at'],
            updated_at=post['updated_at'],
            user_name=post['user_name']
        ) for post in posts
    ]

@router.get("/{post_id}", response_model=PostResponse)
async def get_post_by_id(post_id: int):
    """Get a specific post by ID"""
    post = post_model.get_post_by_id(post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    return PostResponse(
        id=post['id'],
        user_id=post['user_id'],
        title=post['title'],
        content=post['content'],
        image_url=post['image_url'],
        created_at=post['created_at'],
        updated_at=post['updated_at'],
        user_name=post['user_name']
    )

@router.get("/user/{user_id}", response_model=List[PostResponse])
async def get_posts_by_user(user_id: int):
    """Get all posts by a specific user"""
    posts = post_model.get_posts_by_user(user_id)
    return [
        PostResponse(
            id=post['id'],
            user_id=post['user_id'],
            title=post['title'],
            content=post['content'],
            image_url=post['image_url'],
            created_at=post['created_at'],
            updated_at=post['updated_at'],
            user_name=post['user_name']
        ) for post in posts
    ]

@router.put("/{post_id}", response_model=dict)
async def update_post(
    post_id: int, 
    post: PostUpdate, 
    current_user_id: int = Depends(verify_token)
):
    """Update a post (only by the author)"""
    # Check if post exists and belongs to current user
    existing_post = post_model.get_post_by_id(post_id)
    if not existing_post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    if existing_post['user_id'] != current_user_id:
        raise HTTPException(status_code=403, detail="Not authorized to update this post")
    
    try:
        rows_affected = post_model.update_post(
            post_id=post_id,
            title=post.title,
            content=post.content,
            image_url=post.image_url
        )
        
        if rows_affected == 0:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return {"message": "Post updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update post: {str(e)}")

@router.delete("/{post_id}", response_model=dict)
async def delete_post(post_id: int, current_user_id: int = Depends(verify_token)):
    """Delete a post (only by the author)"""
    # Check if post exists and belongs to current user
    existing_post = post_model.get_post_by_id(post_id)
    if not existing_post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    if existing_post['user_id'] != current_user_id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this post")
    
    try:
        rows_affected = post_model.delete_post(post_id)
        
        if rows_affected == 0:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return {"message": "Post deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete post: {str(e)}")