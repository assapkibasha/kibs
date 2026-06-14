"use client";

import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className="theme-toggle">
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
