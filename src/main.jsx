import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LGPDProvider } from "./contexts/lgpdAgreement";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LGPDProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LGPDProvider>
  </React.StrictMode>
);
