"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth0_react_1 = require("@auth0/auth0-react");
function LoginButton() {
    var loginWithRedirect = (0, auth0_react_1.useAuth0)().loginWithRedirect;
    return React.createElement("button", { onClick: function () { return loginWithRedirect(); } }, "Log In");
}
exports.default = LoginButton;
//# sourceMappingURL=LoginButton.js.map