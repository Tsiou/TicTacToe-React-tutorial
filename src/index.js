import { createRoot } from 'react-dom/client';
import Game from "./components/Game";
import "./../src/styles/style.css";
import { StrictMode } from 'react';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <Game />
    </StrictMode>
);