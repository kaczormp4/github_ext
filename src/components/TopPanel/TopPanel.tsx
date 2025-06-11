import React from "react";

const TopPanel: React.FC = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-ext-bg border border-ext-border rounded-lg z-50 p-2 shadow-ext mt-2">
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/kaczormp4/githubext"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-ext-text p-1 rounded transition-all hover:bg-ext-hover hover:-translate-y-0.5"
          title="GitHub Repository"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-6 h-6 object-contain"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/herobart/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-ext-text p-1 rounded transition-all hover:bg-ext-hover hover:-translate-y-0.5"
          title="LinkedIn Profile"
        >
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            alt="LinkedIn"
            className="w-6 h-6 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default TopPanel;
