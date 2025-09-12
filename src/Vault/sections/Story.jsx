import React from "react";
import { useVault } from "../VaultContext";

export default function Story() {
  const { vault, update } = useVault();
  return (
    <div className="section">
      <h3>Personal Story</h3>
      <label>Your Journey</label>
      <textarea
        rows={6}
        placeholder="Tell your story, milestones, motivations..."
        value={vault.story}
        onChange={(e) => update("story", e.target.value)}
      />
    </div>
  );
}
