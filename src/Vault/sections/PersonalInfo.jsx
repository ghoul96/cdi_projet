import React from "react";
import { useVault } from "../VaultContext";

export default function PersonalInfo({ errors }) {
  const { vault, update } = useVault();
  const v = vault.info;

  const change = (e) => update("info", { ...v, [e.target.name]: e.target.value });

  return (
    <div className="section">
      <h3>Personal Information</h3>
      <div className="row">
        <div>
          <label>Name *</label>
          <input name="name" value={v.name} onChange={change} placeholder="Jane Doe" />
          {errors?.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label>Email *</label>
          <input name="email" value={v.email} onChange={change} placeholder="jane@email.com" />
          {errors?.email && <div className="error">{errors.email}</div>}
        </div>
      </div>
      <div className="row">
        <div>
          <label>Date of Birth</label>
          <input name="dob" type="date" value={v.dob} onChange={change} />
        </div>
        <div>
          <label>Location</label>
          <input name="location" value={v.location} onChange={change} placeholder="City, Country" />
        </div>
      </div>
    </div>
  );
}
