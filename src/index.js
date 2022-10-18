import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Helmet } from "react-helmet";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <App>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Perevirka / Перевірка</title>
      <link rel="canonical" href="https://haendzel.github.io/perevirka" />
    </Helmet>
  </App>
);
