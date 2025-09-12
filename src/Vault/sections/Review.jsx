import React from "react";
import { useVault } from "../VaultContext";

export default function Review() {
  const { vault } = useVault();
  const lines = (arr) => (arr && arr.length ? arr.join(", ") : "—");

  return (
    <div className="section review">
      <h3>Review</h3>
      <dl>
        <dt>Name</dt><dd>{vault.info.name || "—"}</dd>
        <dt>Email</dt><dd>{vault.info.email || "—"}</dd>
        <dt>Skills</dt><dd>{lines(vault.skills)}</dd>
        <dt>Background</dt><dd>{vault.background || "—"}</dd>
        <dt>Story</dt><dd>{vault.story || "—"}</dd>
        <dt>Astrology</dt><dd>{[vault.astrology.sun, vault.astrology.moon, vault.astrology.rising].filter(Boolean).join(" / ") || "—"}</dd>
        <dt>Personality</dt><dd>{lines(vault.personality)}</dd>
        <dt>Goals</dt><dd>{vault.goals || "—"}</dd>
      </dl>
    </div>
  );
}

