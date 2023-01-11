"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
require("./MeetingsPage.scss");
var calendar_month_svg_1 = require("../../assets/icons/calendar-month.svg");
var eye_slash_svg_1 = require("../../assets/icons/eye-slash.svg");
// components
var DetailsRow_1 = require("../../components/DetailsRow/DetailsRow");
var DropdownDark_1 = require("../../components/DropdownDark/DropdownDark");
// api calls
var api_1 = require("../../utils/api");
var react_1 = require("react");
function MeetingsPage(_a) {
    var closeModal = _a.closeModal;
    var _b = (0, react_1.useState)([]), meetingsData = _b[0], setMeetingsData = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getMeetings)().then(function (_a) {
            var data = _a.data;
            setMeetingsData(data);
        });
    }, []);
    return (React.createElement("div", { className: "meetings" },
        React.createElement("div", { className: "meetings__buttons" },
            React.createElement("div", { className: "meetings__buttons-hide" },
                React.createElement(ButtonElementDark_1.default, { name: "Hide", img: eye_slash_svg_1.default, onClick: closeModal })),
            React.createElement(DropdownDark_1.default, null),
            React.createElement(ButtonElementDark_1.default, { img: calendar_month_svg_1.default, name: "Date" })),
        React.createElement("div", { className: "meetings__information" }, meetingsData.map(function (item) {
            return React.createElement(DetailsRow_1.default, { data: item, key: item.id });
        }))));
}
exports.default = MeetingsPage;
//# sourceMappingURL=MeetingsPage.js.map