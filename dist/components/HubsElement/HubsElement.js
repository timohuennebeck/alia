"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./HubsElement.scss");
// components
var more_v_svg_1 = require("../../assets/icons/more-v.svg");
// libraries
var react_router_dom_1 = require("react-router-dom");
function HubsElement(_a) {
    var hubsData = _a.hubsData;
    return (React.createElement("div", { className: "hubs-element" },
        React.createElement(react_router_dom_1.Link, { to: "/".concat(hubsData.id), className: "hubs-element__ctn" },
            React.createElement("div", { className: "hubs-element__ctn-img" }),
            React.createElement("p", { className: "hubs-element__ctn-name" }, hubsData.name)),
        React.createElement("img", { className: "hubs-element__img", src: more_v_svg_1.default, alt: "" })));
}
exports.default = HubsElement;
//# sourceMappingURL=HubsElement.js.map