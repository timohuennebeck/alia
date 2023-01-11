"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Header.scss");
// libraries
var react_modal_1 = require("react-modal");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var auth0_react_1 = require("@auth0/auth0-react");
// icons
var hamburger_menu_svg_1 = require("../../assets/icons/hamburger-menu.svg");
var eye_svg_1 = require("../../assets/icons/eye.svg");
var attach_document_svg_1 = require("../../assets/icons/attach-document.svg");
var lock_alt_svg_1 = require("../../assets/icons/lock-alt.svg");
var HeaderLinks_1 = require("../HeaderLinks/HeaderLinks");
var api_1 = require("../../utils/api");
function MobileHeader() {
    var _a = (0, react_1.useState)(false), modalIsOpen = _a[0], setModalIsOpen = _a[1];
    var _b = (0, react_1.useState)([]), usersData = _b[0], setUsersData = _b[1];
    var _c = (0, auth0_react_1.useAuth0)(), user = _c.user, logout = _c.logout;
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data[0]);
        });
    }, []);
    if (!user) {
        return null;
    }
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "header__menu" },
            React.createElement("img", { className: "header__menu-svg", src: hamburger_menu_svg_1.default, alt: "", onClick: openModal })),
        React.createElement("div", { className: "header__nav" },
            React.createElement(react_router_dom_1.Link, { to: "/comments" },
                React.createElement("img", { className: "header__nav-watch", src: eye_svg_1.default, alt: "" })),
            React.createElement(react_router_dom_1.Link, { to: "/files" },
                React.createElement("img", { className: "header__nav-docx", src: attach_document_svg_1.default, alt: "" })),
            React.createElement(react_router_dom_1.Link, null,
                React.createElement("img", { onClick: function () { return logout({ returnTo: window.location.origin }); }, className: "header__nav-more", src: lock_alt_svg_1.default, alt: "" }))),
        React.createElement(react_router_dom_1.Link, { to: "/profile/".concat(usersData.id), className: "header__profile" },
            React.createElement("img", { className: "header__profile-img", src: user.picture, alt: "" }),
            React.createElement("h5", { className: "header__profile-name" }, user.name)),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "header__card-modal" },
            React.createElement(HeaderLinks_1.default, { closeModal: closeModal }))));
}
exports.default = MobileHeader;
//# sourceMappingURL=Header.js.map