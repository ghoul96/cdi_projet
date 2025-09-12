import React from "react";
import { useVault } from "../VaultContext";

export default function Background({ errors }) {
  const { vault, update } = useVault();
  return (
    <div className="section">
      <h3>Professional Background</h3>
      <label>Short Summary</label>
      <textarea
        rows={4}
        placeholder="e.g., Frontend dev with 2 years in React & design systems..."
        value={vault.background}
        onChange={(e) => update("background", e.target.value)}
      />
      {errors?.background && <div className="error">{errors.background}</div>}
    </div>
  );
}
