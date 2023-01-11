"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./TrendingForYouPage.scss");
// images
var cog_svg_1 = require("../../assets/icons/cog.svg");
// libraries
var react_router_dom_1 = require("react-router-dom");
function TrendingForYouPage() {
    return (React.createElement("div", { className: "trending-sidebar" },
        React.createElement("div", { className: "trending-sidebar__settings" },
            React.createElement("h3", { className: "trending-sidebar__settings-header" }, "Trending For You"),
            React.createElement("img", { className: "trending-sidebar__settings-img", src: cog_svg_1.default, alt: "" })),
        React.createElement("p", { className: "trending-sidebar__date" }, "TRENDING IN MARKETING"),
        React.createElement("div", { className: "trending-sidebar__list" }),
        React.createElement("div", { className: "trending-sidebar__line" }),
        React.createElement("p", { className: "trending-sidebar__date" }, "TRENDING IN MARKETING"),
        React.createElement("div", { className: "trending-sidebar__list" }),
        React.createElement(react_router_dom_1.Link, { to: "/trending", className: "trending-sidebar__more" }, "Show More")));
}
exports.default = TrendingForYouPage;
//# sourceMappingURL=TrendingForYouPage.js.map