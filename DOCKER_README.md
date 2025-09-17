# Docker Setup Instructions

This project includes a complete Docker setup with SQLite database integration.

## Files Created

- `Dockerfile` - Multi-stage build configuration for React app
- `docker-compose.yml` - Complete orchestration with SQLite database
- `database/init.sql` - SQLite database initialization script
- `.dockerignore` - Optimizes Docker build process

## Quick Start

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - React App: http://localhost:3000
   - SQLite Web Admin: http://localhost:8080 (for database management)

## What's Included

### Services

1. **Frontend** (React App)
   - Runs on port 3000
   - Multi-stage build for optimized production image
   - Nginx serving the built React app

2. **Database Initialization**
   - Automatically creates SQLite database with sample data
   - Runs once when the database doesn't exist

3. **SQLite Web Admin** (Optional)
   - Web interface for database management
   - Access at http://localhost:8080

### Database Structure

The SQLite database includes these tables:
- `users` - User profiles and authentication
- `posts` - Blog posts or content
- `comments` - User comments on posts
- `categories` - Content categories
- `post_categories` - Many-to-many relationship table

## Commands

### Development Commands

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Build and start
docker-compose up --build

# Stop all services
docker-compose down

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs frontend
```

### Database Management

```bash
# Access SQLite database directly
docker run --rm -it -v ${PWD}/data:/data alpine:latest sh
apk add sqlite
sqlite3 /data/app.db

# Or use the web interface at http://localhost:8080
```

### Cleanup

```bash
# Stop and remove containers, networks
docker-compose down

# Also remove volumes (WARNING: This deletes your database!)
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

## File Structure

```
├── Dockerfile                 # React app container
├── docker-compose.yml         # Service orchestration
├── .dockerignore              # Build optimization
├── database/
│   └── init.sql              # Database initialization
├── data/                     # SQLite database storage (auto-created)
│   └── app.db               # SQLite database file
└── src/                      # Your React application
```

## Environment Variables

You can customize the setup by creating a `.env` file:

```env
# Frontend port
FRONTEND_PORT=3000

# SQLite Admin port
SQLITE_ADMIN_PORT=8080

# Database file name
DB_NAME=app.db
```

## Production Deployment

For production, you might want to:

1. Remove the SQLite web admin service
2. Use a proper reverse proxy (nginx)
3. Add SSL certificates
4. Use environment-specific configurations

## Troubleshooting

- **Database not initializing**: Check that the `data/` folder has write permissions
- **Port conflicts**: Change ports in docker-compose.yml if 3000 or 8080 are in use
- **Build failures**: Run `docker-compose down` and `docker-compose up --build`