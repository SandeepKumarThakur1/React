import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseState2 from "./UseState2.jsx";
import UseState3 from "./UseState3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseState2 /> */}
    <UseState3 />
  </StrictMode>
);
