import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// tailwind config
import "./assets/style/config/tailwind.css";

import App from "./App.tsx";

// style
import "./assets/style/config/style.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
