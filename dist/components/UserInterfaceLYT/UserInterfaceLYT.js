"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./UserInterfaceLYT.scss");
var Header_1 = require("../Header/Header");
var react_router_dom_1 = require("react-router-dom");
var FriendsPage_1 = require("../../pages/FriendsPage/FriendsPage");
var FavoriteHubsPage_1 = require("../../pages/FavoriteHubsPage/FavoriteHubsPage");
var UpcomingMeetingsPage_1 = require("../../pages/UpcomingMeetingsPage/UpcomingMeetingsPage");
var UpcomingEventsPage_1 = require("../../pages/UpcomingEventsPage/UpcomingEventsPage");
function UserInterfaceLYT() {
    return (React.createElement("div", { className: "interface" },
        React.createElement("div", { className: "interface__mobile" },
            React.createElement(Header_1.default, null),
            React.createElement("div", { className: "interface__mobile-explore" },
                React.createElement("input", { className: "interface__mobile-explore-input", placeholder: "# Explore" }))),
        React.createElement("div", { className: "interface__desktop" },
            React.createElement("div", { className: "interface__desktop-left" },
                React.createElement("div", { className: "interface__desktop-left-explore" },
                    React.createElement("input", { className: "interface__desktop-left-explore-input", placeholder: "# Explore" })),
                React.createElement(FriendsPage_1.default, null),
                React.createElement(FavoriteHubsPage_1.default, null)),
            React.createElement("div", { className: "interface__desktop-main" },
                React.createElement(react_router_dom_1.Outlet, null)),
            React.createElement("div", { className: "interface__desktop-right" },
                React.createElement(Header_1.default, null),
                React.createElement(UpcomingMeetingsPage_1.default, null),
                React.createElement(UpcomingEventsPage_1.default, null)))));
}
exports.default = UserInterfaceLYT;
//# sourceMappingURL=UserInterfaceLYT.js.map