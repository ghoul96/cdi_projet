import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to CDI Project</h1>
      <p>This is a React application with Python backend and SQLite database.</p>
      
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>User authentication (login/register)</li>
          <li>Protected routes</li>
          <li>Python FastAPI backend</li>
          <li>SQLite database</li>
          <li>Docker containerization</li>
        </ul>
      </div>
      
      <div className="getting-started">
        <h2>Getting Started</h2>
        <p>Create an account or log in to access all features!</p>
      </div>
    </div>
  );
};

export default HomePage;