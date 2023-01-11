"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./SearchInterfaceLYT.scss");
var Header_1 = require("../Header/Header");
var react_router_dom_1 = require("react-router-dom");
var FriendsPage_1 = require("../../pages/FriendsPage/FriendsPage");
var FavoriteHubsPage_1 = require("../../pages/FavoriteHubsPage/FavoriteHubsPage");
var UpcomingMeetingsPage_1 = require("../../pages/UpcomingMeetingsPage/UpcomingMeetingsPage");
var UpcomingEventsPage_1 = require("../../pages/UpcomingEventsPage/UpcomingEventsPage");
var search_svg_1 = require("../../assets/icons/search.svg");
function SearchInterfaceLYT() {
    return (React.createElement("div", { className: "search" },
        React.createElement("div", { className: "search__mobile" },
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "search__mobile-explore" },
                React.createElement("img", { className: "search__mobile-explore-img", src: search_svg_1.default, alt: "" }),
                React.createElement("input", { className: "search__mobile-explore-input", placeholder: "Search..." }))),
        React.createElement("div", { className: "search__desktop" },
            React.createElement("div", { className: "search__desktop-left" },
                React.createElement("div", { className: "search__desktop-left-explore" },
                    React.createElement("input", { className: "search__desktop-left-explore-input", placeholder: "# Explore" })),
                React.createElement(FriendsPage_1.default, null),
                React.createElement(FavoriteHubsPage_1.default, null)),
            React.createElement("div", { className: "search__desktop-main" },
                React.createElement("div", { className: "search__desktop-main-explore" },
                    React.createElement("img", { className: "search__desktop-main-explore-img", src: search_svg_1.default, alt: "" }),
                    React.createElement("input", { className: "search__desktop-main-explore-input", placeholder: "Search..." })),
                React.createElement(react_router_dom_1.Outlet, null)),
            React.createElement("div", { className: "search__desktop-right" },
                React.createElement(Header_1.default, null),
                React.createElement(UpcomingMeetingsPage_1.default, null),
                React.createElement(UpcomingEventsPage_1.default, null)))));
}
exports.default = SearchInterfaceLYT;
//# sourceMappingURL=SearchInterfaceLYT.js.map