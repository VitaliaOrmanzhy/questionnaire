import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/App.css";
import App from "@/App.tsx";
import AppProvider from "./context/AppProvider";
import "@/i18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
