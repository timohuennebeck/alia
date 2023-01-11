"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./HeaderLinks.scss");
// libraries
var react_router_dom_1 = require("react-router-dom");
// icons
var hamburger_menu_svg_1 = require("../../assets/icons/hamburger-menu.svg");
function MobileHeaderLinks(_a) {
    var closeModal = _a.closeModal;
    return (React.createElement("div", { className: "header-links", onClick: closeModal },
        React.createElement("img", { className: "header-links__img", src: hamburger_menu_svg_1.default, alt: "" }),
        React.createElement("div", { className: "header-links__links" },
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/" }, "Home"),
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/friends" }, "Friends"),
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/trending" }, "Trending Posts"),
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/hubs" }, "Favorite Hubs"),
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/meetings" }, "Upcoming Meetings"),
            React.createElement(react_router_dom_1.Link, { className: "header-links__links-indv", to: "/events" }, "Upcoming Events"))));
}
exports.default = MobileHeaderLinks;
//# sourceMappingURL=HeaderLinks.js.map