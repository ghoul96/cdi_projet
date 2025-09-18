import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Auth.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [currentForm, setCurrentForm] = useState('login'); // 'login' or 'register'

  if (!isOpen) return null;

  const handleSwitchToRegister = () => {
    setCurrentForm('register');
  };

  const handleSwitchToLogin = () => {
    setCurrentForm('login');
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-header">
          <div></div> {/* Spacer */}
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        {currentForm === 'login' ? (
          <LoginForm 
            onSwitchToRegister={handleSwitchToRegister}
            onClose={onClose}
          />
        ) : (
          <RegisterForm 
            onSwitchToLogin={handleSwitchToLogin}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;