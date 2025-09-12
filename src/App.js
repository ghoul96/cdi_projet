
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// Import your Profile component
import UserVault from "./Vault/UserVault";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (default CRA content + button) */}
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>

                {/* ✅ New Button under Learn React */}
                <Link to="/UserVault">
                  <button className="App-button">Go to user_Vault</button>
                </Link>
                
              </header>
            </div>
          }
        />

        {/* Profile Page */}
        <Route path="/UserVault" element={<UserVault/>} />
      </Routes>
    </Router>
  );
}

export default App;
