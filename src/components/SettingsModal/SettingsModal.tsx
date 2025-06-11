import React from "react";
import { THEME_COLORS } from "../../utils/theme";
import { ThemeColor } from "../../types";

interface SettingsModalProps {
  isVisible: boolean;
  onClose: () => void;
  currentTheme: "light" | "dark";
  currentColor: ThemeColor;
  onThemeChange: (theme: "light" | "dark") => void;
  onColorChange: (color: ThemeColor) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isVisible,
  onClose,
  currentTheme,
  currentColor,
  onThemeChange,
  onColorChange,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-ext-bg p-6 rounded-lg shadow-ext max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-ext-text">Settings</h3>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-ext-hover flex items-center justify-center text-ext-text hover:bg-ext-border transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-ext-text font-medium mb-2">
              Theme Mode
            </label>
            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 px-4 rounded ${
                  currentTheme === "light"
                    ? "bg-ext-primary text-white"
                    : "bg-ext-bg text-ext-text border border-ext-border"
                }`}
                onClick={() => onThemeChange("light")}
              >
                Light
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded ${
                  currentTheme === "dark"
                    ? "bg-ext-primary text-white"
                    : "bg-ext-bg text-ext-text border border-ext-border"
                }`}
                onClick={() => onThemeChange("dark")}
              >
                Dark
              </button>
            </div>
          </div>

          <div>
            <label className="block text-ext-text font-medium mb-2">
              Theme Color
            </label>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(THEME_COLORS).map(([name, color]) => (
                <button
                  key={name}
                  className={`w-10 h-10 rounded-full border-2 ${
                    name === currentColor
                      ? "border-ext-text shadow-ext"
                      : "border-ext-border"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => onColorChange(name as ThemeColor)}
                  title={name}
                >
                  {name === currentColor && (
                    <span className="text-white font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
