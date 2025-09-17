"""
Database models and operations for the CDI Project API
"""
import sqlite3
from typing import List, Optional, Dict, Any
from datetime import datetime

class DatabaseManager:
    def __init__(self, db_path: str = "/app/data/app.db"):
        self.db_path = db_path
    
    def get_connection(self):
        """Get database connection with row factory"""
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn
    
    def execute_query(self, query: str, params: tuple = ()) -> List[Dict[str, Any]]:
        """Execute a SELECT query and return results"""
        conn = self.get_connection()
        try:
            cursor = conn.execute(query, params)
            rows = cursor.fetchall()
            return [dict(row) for row in rows]
        finally:
            conn.close()
    
    def execute_insert(self, query: str, params: tuple = ()) -> int:
        """Execute an INSERT query and return the last row ID"""
        conn = self.get_connection()
        try:
            cursor = conn.execute(query, params)
            conn.commit()
            return cursor.lastrowid
        finally:
            conn.close()
    
    def execute_update(self, query: str, params: tuple = ()) -> int:
        """Execute an UPDATE/DELETE query and return affected rows"""
        conn = self.get_connection()
        try:
            cursor = conn.execute(query, params)
            conn.commit()
            return cursor.rowcount
        finally:
            conn.close()

class UserModel:
    def __init__(self, db_manager: DatabaseManager):
        self.db = db_manager
    
    def create_user(self, name: str, email: str, password_hash: str, bio: str = None) -> int:
        """Create a new user"""
        query = """
        INSERT INTO users (name, email, password, bio)
        VALUES (?, ?, ?, ?)
        """
        return self.db.execute_insert(query, (name, email, password_hash, bio))
    
    def get_user_by_email(self, email: str) -> Optional[Dict[str, Any]]:
        """Get user by email"""
        query = "SELECT * FROM users WHERE email = ?"
        users = self.db.execute_query(query, (email,))
        return users[0] if users else None
    
    def get_user_by_id(self, user_id: int) -> Optional[Dict[str, Any]]:
        """Get user by ID"""
        query = "SELECT * FROM users WHERE id = ?"
        users = self.db.execute_query(query, (user_id,))
        return users[0] if users else None
    
    def get_all_users(self) -> List[Dict[str, Any]]:
        """Get all users"""
        query = "SELECT id, name, email, bio, created_at FROM users ORDER BY created_at DESC"
        return self.db.execute_query(query)

class PostModel:
    def __init__(self, db_manager: DatabaseManager):
        self.db = db_manager
    
    def create_post(self, user_id: int, title: str, content: str, image_url: str = None) -> int:
        """Create a new post"""
        query = """
        INSERT INTO posts (user_id, title, content, image_url)
        VALUES (?, ?, ?, ?)
        """
        return self.db.execute_insert(query, (user_id, title, content, image_url))
    
    def get_post_by_id(self, post_id: int) -> Optional[Dict[str, Any]]:
        """Get post by ID with user information"""
        query = """
        SELECT p.*, u.name as user_name
        FROM posts p
        JOIN users u ON p.user_id = u.id
        WHERE p.id = ?
        """
        posts = self.db.execute_query(query, (post_id,))
        return posts[0] if posts else None
    
    def get_all_posts(self, limit: int = 50, offset: int = 0) -> List[Dict[str, Any]]:
        """Get all posts with user information"""
        query = """
        SELECT p.*, u.name as user_name
        FROM posts p
        JOIN users u ON p.user_id = u.id
        ORDER BY p.created_at DESC
        LIMIT ? OFFSET ?
        """
        return self.db.execute_query(query, (limit, offset))
    
    def get_posts_by_user(self, user_id: int) -> List[Dict[str, Any]]:
        """Get all posts by a specific user"""
        query = """
        SELECT p.*, u.name as user_name
        FROM posts p
        JOIN users u ON p.user_id = u.id
        WHERE p.user_id = ?
        ORDER BY p.created_at DESC
        """
        return self.db.execute_query(query, (user_id,))
    
    def update_post(self, post_id: int, title: str, content: str, image_url: str = None) -> int:
        """Update a post"""
        query = """
        UPDATE posts 
        SET title = ?, content = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
        """
        return self.db.execute_update(query, (title, content, image_url, post_id))
    
    def delete_post(self, post_id: int) -> int:
        """Delete a post"""
        query = "DELETE FROM posts WHERE id = ?"
        return self.db.execute_update(query, (post_id,))

class CommentModel:
    def __init__(self, db_manager: DatabaseManager):
        self.db = db_manager
    
    def create_comment(self, post_id: int, user_id: int, content: str) -> int:
        """Create a new comment"""
        query = """
        INSERT INTO comments (post_id, user_id, content)
        VALUES (?, ?, ?)
        """
        return self.db.execute_insert(query, (post_id, user_id, content))
    
    def get_comments_by_post(self, post_id: int) -> List[Dict[str, Any]]:
        """Get all comments for a specific post"""
        query = """
        SELECT c.*, u.name as user_name
        FROM comments c
        JOIN users u ON c.user_id = u.id
        WHERE c.post_id = ?
        ORDER BY c.created_at ASC
        """
        return self.db.execute_query(query, (post_id,))
    
    def delete_comment(self, comment_id: int) -> int:
        """Delete a comment"""
        query = "DELETE FROM comments WHERE id = ?"
        return self.db.execute_update(query, (comment_id,))

class CategoryModel:
    def __init__(self, db_manager: DatabaseManager):
        self.db = db_manager
    
    def get_all_categories(self) -> List[Dict[str, Any]]:
        """Get all categories"""
        query = "SELECT * FROM categories ORDER BY name"
        return self.db.execute_query(query)
    
    def create_category(self, name: str, description: str = None) -> int:
        """Create a new category"""
        query = "INSERT INTO categories (name, description) VALUES (?, ?)"
        return self.db.execute_insert(query, (name, description))