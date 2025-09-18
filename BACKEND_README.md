# Python Backend API Documentation

## Overview

This is a FastAPI-based REST API backend for the CDI Project. It provides authentication, user management, posts, and comments functionality with SQLite database integration.

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application entry point
│   ├── models/
│   │   ├── __init__.py
│   │   └── database.py      # Database models and operations
│   └── routes/
│       ├── __init__.py
│       ├── users.py         # User authentication and management
│       ├── posts.py         # Posts CRUD operations
│       └── comments.py      # Comments management
├── Dockerfile               # Backend container configuration
└── requirements.txt         # Python dependencies
```

## API Endpoints

### Authentication & Users (`/users`)

- `POST /users/register` - Register a new user
- `POST /users/login` - Login and get access token
- `GET /users/me` - Get current user info (requires auth)
- `GET /users/` - Get all users (public)
- `GET /users/{user_id}` - Get user by ID

### Posts (`/posts`)

- `POST /posts/` - Create a new post (requires auth)
- `GET /posts/` - Get all posts with pagination
- `GET /posts/{post_id}` - Get specific post
- `GET /posts/user/{user_id}` - Get posts by user
- `PUT /posts/{post_id}` - Update post (author only)
- `DELETE /posts/{post_id}` - Delete post (author only)

### Comments (`/comments`)

- `POST /comments/posts/{post_id}` - Add comment to post (requires auth)
- `GET /comments/posts/{post_id}` - Get all comments for post
- `DELETE /comments/{comment_id}` - Delete comment (requires auth)

### System

- `GET /` - API info
- `GET /health` - Health check and database status

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. Register or login to get an access token
2. Include the token in the Authorization header: `Bearer <token>`
3. Tokens expire after 24 hours

## Running the Backend

### With Docker Compose (Recommended)

```bash
# From project root
docker-compose up --build

# Backend will be available at:
# - API: http://localhost:8000
# - API Docs: http://localhost:8000/docs
# - ReDoc: http://localhost:8000/redoc
```

### Standalone Development

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## API Documentation

Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Example API Usage

### Register a User

```bash
curl -X POST "http://localhost:8000/users/register" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "John Doe",
       "email": "john@example.com",
       "password": "mypassword",
       "bio": "Software developer"
     }'
```

### Login

```bash
curl -X POST "http://localhost:8000/users/login" \
     -H "Content-Type: application/json" \
     -d '{
       "email": "john@example.com",
       "password": "mypassword"
     }'
```

### Create a Post (with authentication)

```bash
curl -X POST "http://localhost:8000/posts/" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN_HERE" \
     -d '{
       "title": "My First Post",
       "content": "This is the content of my post"
     }'
```

### Get All Posts

```bash
curl -X GET "http://localhost:8000/posts/"
```

## Database Schema

The API works with these SQLite tables:

- **users**: User profiles and authentication
- **posts**: Blog posts or content
- **comments**: User comments on posts
- **categories**: Content categories
- **post_categories**: Many-to-many relationship

## Environment Variables

Set these in your docker-compose.yml or environment:

- `DATABASE_PATH`: Path to SQLite database (default: `/app/data/app.db`)
- `SECRET_KEY`: JWT secret key (change in production!)

## Security Features

- Password hashing with SHA-256
- JWT token authentication
- CORS protection configured for React frontend
- SQL injection protection through parameterized queries

## Development Tips

1. **Database Changes**: Modify `database/init.sql` and restart containers
2. **API Testing**: Use the built-in Swagger UI at `/docs`
3. **Debugging**: Check logs with `docker-compose logs backend`
4. **Database Inspection**: Use SQLite Web Admin at http://localhost:8080

## Production Considerations

- Change `SECRET_KEY` to a secure random value
- Use environment variables for sensitive configuration
- Consider using PostgreSQL for production instead of SQLite
- Implement proper logging and monitoring
- Add rate limiting and input validation
- Use HTTPS in production