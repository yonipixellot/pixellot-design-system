import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./theme";
import App from "./showcase/App";

const root = document.getElementById("root");
if (root) {
  const loader = document.getElementById("_loader");
  if (loader) loader.remove();
  createRoot(root).render(<ThemeProvider><App /></ThemeProvider>);
}
