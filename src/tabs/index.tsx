import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import App from "./App";
import ThemeProvider from "./components/ThemeProvider";

function init() {
    document.documentElement.classList.add('dark')

    const appContainer = document.createElement('div')
    appContainer.classList.add('w-full');
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    root.render(
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
}

init();