"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
require("./EventsPage.scss");
var calendar_month_svg_1 = require("../../assets/icons/calendar-month.svg");
var eye_slash_svg_1 = require("../../assets/icons/eye-slash.svg");
// components
var DetailsRow_1 = require("../../components/DetailsRow/DetailsRow");
// api calls
var api_1 = require("../../utils/api");
var react_1 = require("react");
var DropdownDark_1 = require("../../components/DropdownDark/DropdownDark");
function EventsPage(_a) {
    var closeModal = _a.closeModal;
    var _b = (0, react_1.useState)([]), eventsData = _b[0], setEventsData = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getEvents)().then(function (_a) {
            var data = _a.data;
            setEventsData(data);
        });
    }, []);
    return (React.createElement("div", { className: "events" },
        React.createElement("div", { className: "events__buttons" },
            React.createElement("div", { className: "events__buttons-hide" },
                React.createElement(ButtonElementDark_1.default, { name: "Hide", img: eye_slash_svg_1.default, onClick: closeModal })),
            React.createElement(DropdownDark_1.default, null),
            React.createElement(ButtonElementDark_1.default, { img: calendar_month_svg_1.default, name: "Date" })),
        React.createElement("div", { className: "events__information" }, eventsData.map(function (item) {
            return React.createElement(DetailsRow_1.default, { data: item, key: item.id });
        }))));
}
exports.default = EventsPage;
//# sourceMappingURL=EventsPage.js.map