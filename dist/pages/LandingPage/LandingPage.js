"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./LandingPage.scss");
// images
var alia_logo_png_1 = require("../../assets/images/alia-logo.png");
// libraries
var auth0_react_1 = require("@auth0/auth0-react");
function LandingPage() {
    var loginWithRedirect = (0, auth0_react_1.useAuth0)().loginWithRedirect;
    return (React.createElement("div", { className: "landing" },
        React.createElement("div", { className: "landing__ctn" },
            React.createElement("div", { className: "landing__ctn-access" },
                React.createElement("p", null, "Don't have an account? Log in using a sample account:"),
                React.createElement("p", null, "Email: beta@fuse.com and PW: !8n3MapQGt?7fYyQ")),
            React.createElement("div", { className: "landing__ctn-indv" },
                React.createElement("p", { className: "landing__ctn-indv-version" }, "Alpha Version 1.0"),
                React.createElement("img", { className: "landing__ctn-indv-logo", src: alia_logo_png_1.default, alt: "" }),
                React.createElement("p", { className: "landing__ctn-indv-welcome" }, "Welcome to Fuse!"),
                React.createElement("p", { className: "landing__ctn-indv-account" }, "Log in with a Google account or sign up using email to continue.")),
            React.createElement("div", { className: "landing__ctn-login" },
                React.createElement("button", { onClick: function () { return loginWithRedirect({ screen_hint: "signup" }); }, className: "landing__ctn-login-buttons" }, "Sign Up"),
                React.createElement("button", { onClick: function () { return loginWithRedirect(); }, className: "landing__ctn-login-buttons" }, "Log In")))));
}
exports.default = LandingPage;
//# sourceMappingURL=LandingPage.js.map