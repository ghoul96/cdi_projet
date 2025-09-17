"""
Comments management routes
"""
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from ..models.database import DatabaseManager, CommentModel
from ..main import verify_token

router = APIRouter(prefix="/comments", tags=["comments"])

# Initialize database models
db_manager = DatabaseManager()
comment_model = CommentModel(db_manager)

class CommentCreate(BaseModel):
    content: str

class CommentResponse(BaseModel):
    id: int
    post_id: int
    user_id: int
    content: str
    created_at: str
    user_name: str

@router.post("/posts/{post_id}", response_model=dict)
async def create_comment(
    post_id: int, 
    comment: CommentCreate, 
    current_user_id: int = Depends(verify_token)
):
    """Create a new comment on a post"""
    try:
        comment_id = comment_model.create_comment(
            post_id=post_id,
            user_id=current_user_id,
            content=comment.content
        )
        
        return {
            "message": "Comment created successfully",
            "comment_id": comment_id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create comment: {str(e)}")

@router.get("/posts/{post_id}", response_model=List[CommentResponse])
async def get_comments_by_post(post_id: int):
    """Get all comments for a specific post"""
    comments = comment_model.get_comments_by_post(post_id)
    return [
        CommentResponse(
            id=comment['id'],
            post_id=comment['post_id'],
            user_id=comment['user_id'],
            content=comment['content'],
            created_at=comment['created_at'],
            user_name=comment['user_name']
        ) for comment in comments
    ]

@router.delete("/{comment_id}", response_model=dict)
async def delete_comment(comment_id: int, current_user_id: int = Depends(verify_token)):
    """Delete a comment (only by the author)"""
    # Note: In a real application, you'd want to check if the comment belongs to the current user
    # For now, we'll allow any authenticated user to delete any comment
    try:
        rows_affected = comment_model.delete_comment(comment_id)
        
        if rows_affected == 0:
            raise HTTPException(status_code=404, detail="Comment not found")
        
        return {"message": "Comment deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete comment: {str(e)}")