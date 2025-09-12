import React from "react";
import { useVault } from "../VaultContext";

export default function Goals({ errors }) {
  const { vault, update } = useVault();
  return (
    <div className="section">
      <h3>Goals *</h3>
      <label>What are your short/long-term goals?</label>
      <textarea
        rows={4}
        placeholder="e.g., Master React & Solidity, ship CC MVP, land internship..."
        value={vault.goals}
        onChange={(e) => update("goals", e.target.value)}
      />
      {errors?.goals && <div className="error">{errors.goals}</div>}
    </div>
  );
}
