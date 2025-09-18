import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, fallback = null }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-spinner">
        <div>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="auth-required">
        <h3>Authentication Required</h3>
        <p>Please log in to access this content.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;