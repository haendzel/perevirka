import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Helmet } from "react-helmet";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router basename="/perevirka">
    <App>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Perevirka / Перевірка</title>
        <link rel="canonical" href="https://haendzel.github.io/perevirka" />
      </Helmet>
    </App>
  </Router>
);
