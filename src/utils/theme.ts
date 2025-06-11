import { ThemeColor, ThemeColors } from "../types";

export const THEME_COLORS: ThemeColors = {
  orange: "#ff6b00",
  blue: "#0066cc",
  green: "#2ea44f",
  yellow: "#ffd700",
  grey: "#6c757d",
  purple: "#6f42c1",
  red: "#dc3545",
  lightblue: "#17a2b8",
};

export const getStoredTheme = (): "light" | "dark" => {
  return (localStorage.getItem("theme-mode") as "light" | "dark") || "light";
};

export const getStoredColor = (): ThemeColor => {
  return (localStorage.getItem("theme-color") as ThemeColor) || "orange";
};

export const setTheme = (mode: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("theme-mode", mode);
};

export const setColor = (color: ThemeColor) => {
  document.documentElement.style.setProperty(
    "--primary-color",
    THEME_COLORS[color]
  );
  localStorage.setItem("theme-color", color);
};

export const toggleTheme = (
  currentTheme: "light" | "dark"
): "light" | "dark" => {
  return currentTheme === "light" ? "dark" : "light";
};
