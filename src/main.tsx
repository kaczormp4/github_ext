import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <div className="text-blue-500">Hello single-bundle world!</div>
);

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
