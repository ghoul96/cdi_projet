import {useState} from "react";
import "./slyle/vault.css";
import { VaultProvider, useVault } from "./VaultContext";
import { validate } from "./utils/validation";
import { saveFinal, clearDraft } from "./utils/storage";

import PersonalInfo from "./sections/PersonalInfo";
import Skills from "./sections/skills";
import Background from "./sections/Background";
import Story from "./sections/Story";
import Astrology from "./sections/astrology";
import Personality from "./sections/Personality";
import Goals from "./sections/Goals";
import Review from "./sections/Review";

const STEPS = [
  { key: "info", label: "Info" },
  { key: "skills", label: "Skills" },
  { key: "background", label: "Background" },
  { key: "story", label: "Story" },
  { key: "astrology", label: "Astrology" },
  { key: "personality", label: "Personality" },
  { key: "goals", label: "Goals" },
  { key: "review", label: "Review" },
];

function VaultInner() {
  const { vault } = useVault();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  const go = (i) => setStep(i);
  const next = () => setStep(Math.min(step + 1, STEPS.length - 1));
  const prev = () => setStep(Math.max(step - 1, 0));

  const onSave = () => {
    const { valid, errors } = validate(vault);
    setErrors(errors);
    if (!valid) {
      // jump to the first section that has an error
      const order = ["info","skills","background","story","astrology","personality","goals"];
      const idx = order.findIndex((k) => {
        if (k === "info") return errors.name || errors.email;
        if (k === "skills") return errors.skills;
        if (k === "background") return errors.background;
        if (k === "astrology") return errors.astrology;
        if (k === "personality") return errors.personality;
        if (k === "goals") return errors.goals;
        return false;
      });
      if (idx >= 0) setStep(idx);
      return;
    }
    saveFinal(vault);
    clearDraft();
    alert("✅ Profile saved! (localStorage ‘userVault’)");
  };

  return (
    <div className="vault">
      <h2>🔐 User Vault</h2>

      <div className="nav">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            className={i === step ? "active" : ""}
            onClick={() => go(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {step === 0 && <PersonalInfo errors={errors} />}
      {step === 1 && <Skills errors={errors} />}
      {step === 2 && <Background errors={errors} />}
      {step === 3 && <Story />}
      {step === 4 && <Astrology errors={errors} />}
      {step === 5 && <Personality errors={errors} />}
      {step === 6 && <Goals errors={errors} />}
      {step === 7 && <Review />}

      <div className="actions">
        <button className="btn-ghost" onClick={prev} disabled={step === 0}>Back</button>
        {step < STEPS.length - 1 ? (
          <button className="btn-primary" onClick={next}>Next</button>
        ) : (
          <button className="btn-primary" onClick={onSave}>Save Profile</button>
        )}
      </div>
    </div>
  );
}

export default function UserVault() {
  return (
    <VaultProvider>
      <VaultInner />
    </VaultProvider>
  );
}
