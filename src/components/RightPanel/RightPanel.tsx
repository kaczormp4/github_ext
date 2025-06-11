import React from "react";

interface RightPanelProps {
  isVisible: boolean;
  onClose: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-screen bg-ext-bg border-l border-ext-border shadow-ext z-40 transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-3 bg-ext-primary text-white">
        <span className="font-medium">Tools</span>
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors"
        >
          ×
        </button>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div className="bg-ext-bg border border-ext-border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Repository Tools</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-ext-primary text-white rounded-lg hover:bg-ext-hover transition-colors">
                Clone Repository
              </button>
              <button className="w-full px-4 py-2 bg-ext-primary text-white rounded-lg hover:bg-ext-hover transition-colors">
                Fork Repository
              </button>
              <button className="w-full px-4 py-2 bg-ext-primary text-white rounded-lg hover:bg-ext-hover transition-colors">
                Create Branch
              </button>
            </div>
          </div>
          <div className="bg-ext-bg border border-ext-border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Issue Tools</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-ext-primary text-white rounded-lg hover:bg-ext-hover transition-colors">
                Create Issue
              </button>
              <button className="w-full px-4 py-2 bg-ext-primary text-white rounded-lg hover:bg-ext-hover transition-colors">
                View Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
