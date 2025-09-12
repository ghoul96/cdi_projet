import React, { useState } from "react";
import { useVault } from "../VaultContext";

export default function Skills({ errors }) {
  const { vault, update } = useVault();
  const [input, setInput] = useState("");
  const add = () => {
    if (!input.trim()) return;
    const unique = Array.from(new Set([...(vault.skills || []), input.trim()]));
    update("skills", unique);
    setInput("");
  };
  const remove = (s) => update("skills", (vault.skills || []).filter((x) => x !== s));

  return (
    <div className="section">
      <h3>Skills *</h3>
      <div className="row">
        <div>
          <label>Add Skill</label>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="React, Git, Solidity..." />
        </div>
        <div style={{ alignSelf: "end" }}>
          <button className="btn-primary" onClick={add}>Add</button>
        </div>
      </div>
      <div style={{ marginTop: ".5rem" }}>
        {(vault.skills || []).map((s) => (
          <span key={s} className="badge active" onClick={() => remove(s)} title="Remove">{s}</span>
        ))}
      </div>
      {errors?.skills && <div className="error">{errors.skills}</div>}
    </div>
  );
}

