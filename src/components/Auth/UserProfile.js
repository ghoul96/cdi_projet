import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

const UserProfile = ({ onOpenAuth }) => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="auth-buttons">
        <button className="login-btn" onClick={onOpenAuth}>
          Login / Register
        </button>
      </div>
    );
  }

  const getUserInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="user-info">
      <div className="user-avatar">
        {getUserInitials(user.name)}
      </div>
      <div className="user-details">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;