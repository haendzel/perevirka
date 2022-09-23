import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Perevirka / Перевірка</title>
        <link rel="canonical" href="https://perevirka.com" />
      </Helmet>
    </App>
  </StrictMode>
);
