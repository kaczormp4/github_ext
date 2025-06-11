import { useState } from "react";
import DockPanel from "./components/DockPanel/DockPanel";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import TopPanel from "./components/TopPanel/TopPanel";
import useTheme from "./hooks/useTheme";
import { ThemeColor } from "./types";

function App() {
  const { theme, color, toggleTheme, changeColor } = useTheme();
  const [isLeftPanelVisible, setIsLeftPanelVisible] = useState(false);
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [actionLogs, setActionLogs] = useState<string[]>([]);

  const addActionLog = (action: string) => {
    setActionLogs((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()} - ${action}`,
    ]);
  };

  const handleStatusClick = () => {
    setIsLeftPanelVisible(true);
    addActionLog("Status panel opened");
  };

  const handleToolsClick = () => {
    setIsRightPanelVisible(true);
    addActionLog("Tools panel opened");
  };

  const handleSettingsClick = () => {
    setIsSettingsVisible(true);
    addActionLog("Settings opened");
  };

  const handleThemeChange = (newTheme: "light" | "dark") => {
    toggleTheme();
    addActionLog(`Theme changed to ${newTheme}`);
  };

  const handleColorChange = (newColor: ThemeColor) => {
    changeColor(newColor);
    addActionLog(`Color changed to ${newColor}`);
  };

  return (
    <div className="min-h-screen bg-ext-bg text-ext-text">
      <TopPanel />
      <DockPanel
        onStatusClick={handleStatusClick}
        onToolsClick={handleToolsClick}
        onSettingsClick={handleSettingsClick}
      />
      <LeftPanel
        isVisible={isLeftPanelVisible}
        onClose={() => setIsLeftPanelVisible(false)}
        actionLogs={actionLogs}
      />
      <RightPanel
        isVisible={isRightPanelVisible}
        onClose={() => setIsRightPanelVisible(false)}
      />
      <SettingsModal
        isVisible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
        currentTheme={theme}
        currentColor={color}
        onThemeChange={handleThemeChange}
        onColorChange={handleColorChange}
      />
    </div>
  );
}

export default App;
