import React, { useEffect, useRef } from "react";

interface LeftPanelProps {
  isVisible: boolean;
  onClose: () => void;
  actionLogs: string[];
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  isVisible,
  onClose,
  actionLogs,
}) => {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [actionLogs]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-80 h-screen bg-ext-bg border-r border-ext-border shadow-ext z-40 transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-3 bg-ext-primary text-white">
        <span className="font-medium">GitHub Extension</span>
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors"
        >
          ×
        </button>
      </div>
      <div className="p-4">
        <div
          ref={logRef}
          className="h-[calc(100vh-4rem)] overflow-y-auto bg-ext-bg border border-ext-border rounded-lg p-3"
        >
          {actionLogs.map((log, index) => (
            <div
              key={index}
              className="py-2 border-b border-ext-border last:border-b-0 text-sm"
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
