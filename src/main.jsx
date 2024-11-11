import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import App from "./App.jsx";
import "./index.css";

// Wrap your App component with Router to enable routing
createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
