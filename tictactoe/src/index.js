import { createRoot } from "react-dom/client";
import Game from "./Game";
import "./index.css";

const elementRoot = document.getElementById("root");
const root = createRoot(elementRoot);

root.render(<Game />);
