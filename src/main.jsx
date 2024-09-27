import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./config/Query-clinet.js";
import './i18n.js'

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
