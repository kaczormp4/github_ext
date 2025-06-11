import React from "react";
import { DockItem } from "../../types";

interface DockPanelProps {
  onStatusClick: () => void;
  onToolsClick: () => void;
  onSettingsClick: () => void;
}

const DockPanel: React.FC<DockPanelProps> = ({
  onStatusClick,
  onToolsClick,
  onSettingsClick,
}) => {
  const items: DockItem[] = [
    {
      icon: "📊",
      tooltip: "Status",
      action: onStatusClick,
    },
    {
      icon: "🛠️",
      tooltip: "Tools",
      action: onToolsClick,
    },
    {
      icon: "⚙️",
      tooltip: "Settings",
      action: onSettingsClick,
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-ext-bg p-3 rounded-2xl flex gap-4 shadow-ext border-2 border-ext-border z-50">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="relative p-2 rounded-lg transition-all hover:bg-ext-hover hover:-translate-y-0.5 group"
          title={item.tooltip}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-ext-primary text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            {item.tooltip}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DockPanel;
