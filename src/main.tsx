import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalContextProvider from "./context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GlobalContextProvider>,
);
