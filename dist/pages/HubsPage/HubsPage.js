"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
require("./HubsPage.scss");
// images
var history_svg_1 = require("../../assets/icons/history.svg");
var heart_svg_1 = require("../../assets/icons/heart.svg");
var eye_slash_svg_1 = require("../../assets/icons/eye-slash.svg");
// components
var DetailsRow_1 = require("../../components/DetailsRow/DetailsRow");
// libraries
// api calls
var api_1 = require("../../utils/api");
var react_1 = require("react");
function HubsPage(_a) {
    var closeModal = _a.closeModal;
    var _b = (0, react_1.useState)([]), hubsData = _b[0], setHubsData = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getHubs)().then(function (_a) {
            var data = _a.data;
            setHubsData(data);
        });
    }, []);
    return (React.createElement("div", { className: "hubs" },
        React.createElement("div", { className: "hubs__buttons" },
            React.createElement("div", { className: "hubs__buttons-hide" },
                React.createElement(ButtonElementDark_1.default, { name: "Hide", img: eye_slash_svg_1.default, onClick: closeModal })),
            React.createElement(ButtonElementDark_1.default, { img: history_svg_1.default, name: "Recent" }),
            React.createElement(ButtonElementDark_1.default, { img: heart_svg_1.default, name: "Favorites" })),
        React.createElement("div", { className: "hubs__information" }, hubsData.map(function (item) {
            return React.createElement(DetailsRow_1.default, { data: item, key: item.id });
        }))));
}
exports.default = HubsPage;
//# sourceMappingURL=HubsPage.js.map