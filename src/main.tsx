import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// tailwind config
import "./assets/style/config/tailwind.css";

import App from "./App.tsx";

// start toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
// style
import "./assets/style/config/style.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>{" "}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
