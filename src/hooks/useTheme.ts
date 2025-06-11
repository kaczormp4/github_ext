import { useState, useEffect } from "react";
import { ThemeType, ThemeColor } from "../types";
import {
  getStoredTheme,
  getStoredColor,
  setTheme,
  setColor,
} from "../utils/theme";

const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeType>(getStoredTheme());
  const [color, setColorState] = useState<ThemeColor>(getStoredColor());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    setColor(color);
  }, [color]);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeColor = (newColor: ThemeColor) => {
    setColorState(newColor);
  };

  return { theme, color, toggleTheme, changeColor };
};

export default useTheme;
