
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Import your Profile component
import Profile from "./components/Pages/Profile";
import Contact from "./components/Pages/Contact";
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
