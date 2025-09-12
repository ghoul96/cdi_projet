import React from "react";
import { useVault } from "../VaultContext";
import { ZODIAC } from "../utils/validation";

export default function Astrology({ errors }) {
  const { vault, update } = useVault();
  const a = vault.astrology;
  const set = (k, v) => update("astrology", { ...a, [k]: v });

  return (
    <div className="section">
      <h3>Astrology Alignment *</h3>
      <div className="row">
        <div>
          <label>Sun</label>
          <select value={a.sun} onChange={(e) => set("sun", e.target.value)}>
            <option value="">Select</option>
            {ZODIAC.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div>
          <label>Moon</label>
          <select value={a.moon} onChange={(e) => set("moon", e.target.value)}>
            <option value="">Select</option>
            {ZODIAC.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
      </div>
      <div className="row">
        <div>
          <label>Rising</label>
          <select value={a.rising} onChange={(e) => set("rising", e.target.value)}>
            <option value="">Select</option>
            {ZODIAC.map((z) => <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
      </div>
      {errors?.astrology && <div className="error">{errors.astrology}</div>}
    </div>
  );
}
