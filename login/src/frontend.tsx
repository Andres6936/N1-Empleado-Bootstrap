/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import {createRoot} from "react-dom/client";
import {App} from "./App";
import {BrowserRouter, Route, Routes, useLocation} from "react-router";
import {StackHandler, StackProvider, StackTheme} from "@stackframe/react";
import {stackClientApp} from "@/stack";

function HandlerRoutes() {
    const location = useLocation();

    return (
        <StackHandler app={stackClientApp} location={location.pathname} fullPage />
    );
}

const elem = document.getElementById("root")!;
const app = (
    <BrowserRouter>
        <StackProvider app={stackClientApp}>
            <StackTheme>
                <Routes>
                    <Route path="/handler/*" element={<HandlerRoutes />} />
                    <Route path="/" element={<App/>}/>
                </Routes>
            </StackTheme>
        </StackProvider>
    </BrowserRouter>
);

if (import.meta.hot) {
    // With hot module reloading, `import.meta.hot.data` is persisted.
    const root = (import.meta.hot.data.root ??= createRoot(elem));
    root.render(app);
} else {
    // The hot module reloading API is not available in production.
    createRoot(elem).render(app);
}
