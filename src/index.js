import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="alia-internal-social-media.us.auth0.com"
        clientId="9G9acsUAXVRikMY6qkL5w61t30E3KD8r"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>
);
