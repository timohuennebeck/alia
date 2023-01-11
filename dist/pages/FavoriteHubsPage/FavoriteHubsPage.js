"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./FavoriteHubsPage.scss");
// components
var HubsElement_1 = require("../../components/HubsElement/HubsElement");
var HubsPage_1 = require("../HubsPage/HubsPage");
// libraries
var react_modal_1 = require("react-modal");
var react_1 = require("react");
// api calls
var api_1 = require("../../utils/api");
function FavoriteHubsPage() {
    var _a = (0, react_1.useState)([]), hubsData = _a[0], setHubsData = _a[1];
    var _b = (0, react_1.useState)(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getHubs)().then(function (_a) {
            var data = _a.data;
            setHubsData(data.filter(function (hubs) { return hubs.status === "Favorite"; }));
        });
    }, []);
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "favorite-hubs" },
            React.createElement("h3", null, "Favorite Hubs"),
            React.createElement("div", { className: "favorite-hubs__list" }, hubsData.map(function (item) {
                return React.createElement(HubsElement_1.default, { hubsData: item, key: item.id });
            })),
            React.createElement("p", { className: "favorite-hubs__more", onClick: openModal }, "Explore Hubs")),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "favorite-hubs__card-modal", overlayClassName: "favorite-hubs__card-modal-background" },
            React.createElement(HubsPage_1.default, { closeModal: closeModal }))));
}
exports.default = FavoriteHubsPage;
//# sourceMappingURL=FavoriteHubsPage.js.map