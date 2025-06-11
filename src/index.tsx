import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a container for our app
const container = document.createElement("div");
container.id = "github-ext-root";
document.body.appendChild(container);

// Inject our styles
const style = document.createElement("style");
style.textContent = `
  #github-ext-root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    pointer-events: none;
  }
  #github-ext-root > * {
    pointer-events: auto;
  }
`;
document.head.appendChild(style);

// Render our app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
