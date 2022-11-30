import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-zapksw78lj5vrfgb.us.auth0.com"
        clientId="Z8fDOTZDruoHbtGOV48LqOM4Sl5pxTNJ"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Auth0Provider>
);
