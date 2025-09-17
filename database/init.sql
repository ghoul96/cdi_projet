
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255),
    bio TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post_categories (
    post_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT OR IGNORE INTO users (name, email, password, bio) VALUES 
    ('John Doe', 'john.doe@example.com', 'hashed_password_123', 'Full-stack developer passionate about React and Node.js'),
    ('Jane Smith', 'jane.smith@example.com', 'hashed_password_456', 'UI/UX designer with a love for clean interfaces'),
    ('Mike Johnson', 'mike.johnson@example.com', 'hashed_password_789', 'DevOps engineer focused on containerization and automation');

INSERT OR IGNORE INTO categories (name, description) VALUES 
    ('Technology', 'Posts about programming, software development, and tech trends'),
    ('Design', 'UI/UX design, graphic design, and visual arts'),
    ('Tutorial', 'Step-by-step guides and educational content'),
    ('News', 'Latest news and updates in the tech world');

INSERT OR IGNORE INTO posts (user_id, title, content) VALUES 
    (1, 'Getting Started with React and Docker', 'In this post, we''ll explore how to containerize a React application using Docker and docker-compose...'),
    (2, 'Modern Design Principles for Web Applications', 'User experience is crucial for web applications. Let''s discuss some key principles...'),
    (1, 'SQLite in Production: Pros and Cons', 'SQLite is often overlooked for production use, but it has some interesting characteristics...'),
    (3, 'Docker Compose for Development Environments', 'Setting up consistent development environments with docker-compose can save hours of setup time...');

INSERT OR IGNORE INTO post_categories (post_id, category_id) VALUES 
    (1, 1), (1, 3),  -- React/Docker post: Technology, Tutorial
    (2, 2),          -- Design post: Design
    (3, 1),          -- SQLite post: Technology
    (4, 1), (4, 3);  -- Docker post: Technology, Tutorial

INSERT OR IGNORE INTO comments (post_id, user_id, content) VALUES 
    (1, 2, 'Great tutorial! This helped me set up my React app with Docker.'),
    (1, 3, 'Thanks for sharing. The multi-stage build approach is very efficient.'),
    (2, 1, 'Excellent points about user experience. The examples are very helpful.'),
    (3, 2, 'I never considered SQLite for production. Interesting perspective!'),
    (4, 1, 'Docker Compose has definitely streamlined our development workflow.');

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_posts_user_id ON posts(user_id);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at);
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_user_id ON comments(user_id);


CREATE TRIGGER IF NOT EXISTS update_users_timestamp 
    AFTER UPDATE ON users
BEGIN
    UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

CREATE TRIGGER IF NOT EXISTS update_posts_timestamp 
    AFTER UPDATE ON posts
BEGIN
    UPDATE posts SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;