import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Ensure only one Router
import App from "./App";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* ✅ Ensure Router is here, not inside App */}
    </BrowserRouter>
  </React.StrictMode>
);
