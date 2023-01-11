"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var auth0_react_1 = require("@auth0/auth0-react");
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(react_1.default.createElement(auth0_react_1.Auth0Provider, { domain: "alia-internal-social-media.us.auth0.com", clientId: "9G9acsUAXVRikMY6qkL5w61t30E3KD8r", redirectUri: window.location.origin, cacheLocation: "localstorage" },
    react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(App_1.default, null))));
//# sourceMappingURL=index.js.map