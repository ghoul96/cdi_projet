import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Import context and auth components
import { AuthProvider } from "./contexts/AuthContext";
import AuthModal from "./components/Auth/AuthModal";
import UserProfile from "./components/Auth/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

// Import existing components
import Profile from "./components/Pages/Profile";
import Contact from "./components/Pages/Contact";
import HomePage from "./components/Pages/HomePage";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          {/* Header with authentication */}
          <header className="app-header">
            <nav className="app-nav">
              <div className="nav-brand">
                <h1>CDI Project</h1>
              </div>
              <div className="nav-links">
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact</a>
              </div>
              <div className="nav-auth">
                <UserProfile onOpenAuth={openAuthModal} />
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute fallback={
                    <div className="auth-required-page">
                      <h2>Login Required</h2>
                      <p>Please log in to view your profile.</p>
                      <button onClick={openAuthModal} className="auth-btn">
                        Login / Register
                      </button>
                    </div>
                  }>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Auth Modal */}
          <AuthModal 
            isOpen={isAuthModalOpen} 
            onClose={closeAuthModal} 
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
