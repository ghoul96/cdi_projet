import React, { createContext, useContext, useState, useEffect } from "react";
import { loadDraft, saveDraft } from "./utils/storage";

const defaultVault = {
  info: { name: "", email: "", dob: "", location: "" },
  skills: [],                       // array of strings
  background: "",                   // short professional background
  story: "",                        // longer personal story
  astrology: { sun: "", moon: "", rising: "" },
  personality: [],                  // array of selected traits
  goals: "",                        // text
};

const VaultContext = createContext();

export function VaultProvider({ children }) {
  const [vault, setVault] = useState(() => loadDraft() ?? defaultVault);

  // Autosave draft on any change
  useEffect(() => { saveDraft(vault); }, [vault]);

  const update = (section, value) => {
    setVault((v) => ({ ...v, [section]: value }));
  };

  return (
    <VaultContext.Provider value={{ vault, setVault, update, defaultVault }}>
      {children}
    </VaultContext.Provider>
  );
}

export const useVault = () => useContext(VaultContext);
