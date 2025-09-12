import {useState} from "react";
import { useVault } from "../VaultContext";
import { TRAITS } from "../utils/validation";

export default function Personality({ errors }) {
  const { vault, update } = useVault();
  const toggle = (t) => {
    const set = new Set(vault.personality || []);
    set.has(t) ? set.delete(t) : set.add(t);
    update("personality", Array.from(set));
  };
  const selected = new Set(vault.personality || []);

  return (
    <div className="section">
      <h3>Personality Traits *(pick ≥ 3)</h3>
      <div>
        {TRAITS.map((t) => (
          <span
            key={t}
            className={`badge ${selected.has(t) ? "active" : ""}`}
            onClick={() => toggle(t)}
          >
            {t}
          </span>
        ))}
      </div>
      {errors?.personality && <div className="error">{errors.personality}</div>}
    </div>
  );
}
