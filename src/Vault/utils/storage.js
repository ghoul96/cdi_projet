const DRAFT_KEY = "userVaultDraft";
const FINAL_KEY = "userVault";

export const loadDraft = () => {
  try { return JSON.parse(localStorage.getItem(DRAFT_KEY)); } catch { return null; }
};
export const saveDraft = (data) => {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); } catch {}
};
export const clearDraft = () => localStorage.removeItem(DRAFT_KEY);

export const saveFinal = (data) => {
  try { localStorage.setItem(FINAL_KEY, JSON.stringify(data)); } catch {}
};
export const loadFinal = () => {
  try { return JSON.parse(localStorage.getItem(FINAL_KEY)); } catch { return null; }
};
