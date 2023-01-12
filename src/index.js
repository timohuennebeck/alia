import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="fuse-remote-collaboration.eu.auth0.com"
        clientId="NLgTYFbgQuQQworJUioCjMveEuBawwh5"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>
);
