"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./UpcomingEventsPage.scss");
// images
var cog_svg_1 = require("../../assets/icons/cog.svg");
var EventsElement_1 = require("../../components/EventsElement/EventsElement");
// components
var EventsPage_1 = require("../EventsPage/EventsPage");
// libraries
var react_modal_1 = require("react-modal");
var react_1 = require("react");
// api calls
var api_1 = require("../../utils/api");
function UpcomingEventsPage() {
    var _a = (0, react_1.useState)([]), eventsData = _a[0], setEventsData = _a[1];
    var _b = (0, react_1.useState)(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getEvents)().then(function (_a) {
            var data = _a.data;
            setEventsData(data);
        });
    }, []);
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "upcoming-events" },
            React.createElement("div", { className: "upcoming-events__settings" },
                React.createElement("h3", { className: "upcoming-events__settings-header" }, "Upcoming Events"),
                React.createElement("img", { className: "upcoming-events__settings-img", src: cog_svg_1.default, alt: "" })),
            React.createElement("p", { className: "upcoming-events__date" }, "TODAY"),
            React.createElement("div", { className: "upcoming-events__list" }, eventsData.map(function (item) {
                return React.createElement(EventsElement_1.default, { data: item, key: item.id });
            })),
            React.createElement("p", { className: "upcoming-events__more", onClick: openModal }, "Explore Events")),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "upcoming-events__card-modal", overlayClassName: "upcoming-events__card-modal-background" },
            React.createElement(EventsPage_1.default, { closeModal: closeModal }))));
}
exports.default = UpcomingEventsPage;
//# sourceMappingURL=UpcomingEventsPage.js.map