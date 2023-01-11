"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./FriendsElement.scss");
// icons
var microphone_svg_1 = require("../../assets/icons/microphone.svg");
var more_v_svg_1 = require("../../assets/icons/more-v.svg");
// libraries
var react_router_dom_1 = require("react-router-dom");
function FriendsElement(_a) {
    var usersData = _a.usersData;
    return (React.createElement(react_router_dom_1.Link, { to: "/friends-profile/".concat(usersData.id), className: "friends-element" },
        React.createElement("div", { className: "friends-element__user" },
            React.createElement("img", { className: "friends-element__user-img", src: usersData.image_url, alt: "" }),
            React.createElement("div", { className: "friends-element__user-info" },
                React.createElement("h5", { className: "friends-element__user-info-header" },
                    usersData.first_name,
                    " ",
                    usersData.last_name),
                React.createElement("p", { className: "friends-element__user-info-username" }, usersData.username))),
        React.createElement("div", { className: "friends-element__nav" },
            React.createElement("img", { className: "friends-element__nav-indv", src: microphone_svg_1.default, alt: "" }),
            React.createElement("img", { className: "friends-element__nav-indv", src: more_v_svg_1.default, alt: "" }))));
}
exports.default = FriendsElement;
//# sourceMappingURL=FriendsElement.js.map