"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./UpcomingMeetingsPage.scss");
// images
var cog_svg_1 = require("../../assets/icons/cog.svg");
var MeetingsElement_1 = require("../../components/MeetingsElement/MeetingsElement");
// libraries
var react_modal_1 = require("react-modal");
var react_1 = require("react");
// api calls
var api_1 = require("../../utils/api");
var MeetingsPage_1 = require("../MeetingsPage/MeetingsPage");
function UpcomingMeetingsPage() {
    var _a = (0, react_1.useState)([]), meetingsData = _a[0], setMeetingsData = _a[1];
    var _b = (0, react_1.useState)(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getMeetings)().then(function (_a) {
            var data = _a.data;
            setMeetingsData(data);
        });
    }, []);
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    if (!meetingsData) {
        return React.createElement("p", null, "Loading...");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "upcoming-meetings" },
            React.createElement("div", { className: "upcoming-meetings__settings" },
                React.createElement("h3", { className: "upcoming-meetings__settings-header" }, "Upcoming Meetings"),
                React.createElement("img", { className: "upcoming-meetings__settings-img", src: cog_svg_1.default, alt: "" })),
            React.createElement("p", { className: "upcoming-meetings__date" }, "TODAY"),
            React.createElement("div", { className: "upcoming-meetings__list" }, meetingsData.map(function (item) {
                return React.createElement(MeetingsElement_1.default, { data: item, key: item.id });
            })),
            React.createElement("p", { className: "upcoming-meetings__more", onClick: openModal }, "Explore Meetings")),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "upcoming-meetings__card-modal", overlayClassName: "upcoming-meetings__card-modal-background" },
            React.createElement(MeetingsPage_1.default, { closeModal: closeModal }))));
}
exports.default = UpcomingMeetingsPage;
//# sourceMappingURL=UpcomingMeetingsPage.js.map