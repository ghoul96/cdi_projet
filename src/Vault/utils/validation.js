export function validate(vault) {
  const errors = {};

  // Personal info
  if (!vault.info.name?.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(vault.info.email || "")) errors.email = "Valid email required";

  // Skills
  if (!vault.skills || vault.skills.length === 0) errors.skills = "Add at least one skill";

  // Background or story
  if (!vault.background.trim() && !vault.story.trim()) {
    errors.background = "Add background and/or story";
  }

  // Astrology
  if (!vault.astrology.sun) errors.astrology = "Select at least your Sun sign";

  // Personality
  if (!vault.personality || vault.personality.length < 3) {
    errors.personality = "Pick at least 3 traits";
  }

  // Goals
  if (!vault.goals.trim()) errors.goals = "Add at least one goal";

  return { valid: Object.keys(errors).length === 0, errors };
}

export const ZODIAC = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

export const TRAITS = [
  "Creative","Analytical","Disciplined","Adaptable","Empathetic","Curious",
  "Leadership","Strategic","Resilient","Organized","Visionary","Collaborative"
];
