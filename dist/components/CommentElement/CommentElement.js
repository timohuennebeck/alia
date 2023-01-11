"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./CommentElement.scss");
var ButtonElement_1 = require("../ButtonElement/ButtonElement");
var eye_svg_1 = require("../../assets/icons/eye.svg");
var chat_svg_1 = require("../../assets/icons/chat.svg");
var more_v_svg_1 = require("../../assets/icons/more-v.svg");
var ShowCommentsModal_1 = require("../ShowCommentsModal/ShowCommentsModal");
// libraries
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var react_modal_1 = require("react-modal");
// api calls
var api_1 = require("../../utils/api");
function CommentElement(_a) {
    var commentsData = _a.commentsData;
    var _b = (0, react_1.useState)(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    var _c = (0, react_1.useState)([]), usersData = _c[0], setUsersData = _c[1];
    var _d = (0, react_1.useState)([]), commentsAmount = _d[0], setCommentsAmount = _d[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data.filter(function (user) { return user.id === commentsData.users_id; })[0]);
        });
        (0, api_1.getComments)().then(function (_a) {
            var data = _a.data;
            setCommentsAmount(data.filter(function (comment) { return comment.posts_id === commentsData.id; }));
        });
    }, []);
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    if (!usersData) {
        return React.createElement("p", null, "Loading Database...");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "comment" },
            React.createElement(react_router_dom_1.Link, { to: "/friends-profile/".concat(commentsData.users_id) },
                React.createElement("img", { className: "comment__profile", src: usersData.image_url, alt: "" })),
            React.createElement("div", { className: "comment__info" },
                React.createElement("div", { className: "comment__info-ctn" },
                    React.createElement("div", { className: "comment__info-ctn-name" },
                        React.createElement("img", { className: "comment__info-ctn-name-img", src: usersData.image_url, alt: "" }),
                        React.createElement("div", { className: "comment__info-ctn-name-indv" },
                            React.createElement("h5", { className: "comment__info-ctn-name-indv-header" },
                                usersData.first_name,
                                " ",
                                usersData.last_name),
                            React.createElement("p", { className: "comment__info-ctn-name-indv-username" }, usersData.username))),
                    React.createElement("img", { className: "comment__info-ctn-img", src: more_v_svg_1.default, alt: "" })),
                React.createElement("div", { className: "comment__info-content" },
                    React.createElement("p", { className: "comment__info-content-paragraph" }, commentsData.message),
                    React.createElement("p", { className: "comment__info-content-amount", onClick: openModal },
                        commentsAmount.length,
                        " Comments")),
                React.createElement("div", { className: "comment__info-date" },
                    React.createElement("p", { className: "comment__info-date-time" }, new Date(commentsData.created_at).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })),
                    React.createElement("p", { className: "comment__info-date-date" }, new Date(commentsData.created_at).toLocaleDateString())),
                React.createElement("div", { className: "comment__info-share" },
                    React.createElement("div", { className: "comment__info-share-buttons" },
                        React.createElement(ButtonElement_1.default, { img: eye_svg_1.default, name: "Watch" }),
                        React.createElement(ButtonElement_1.default, { img: chat_svg_1.default, name: "Comment", onClick: openModal })),
                    React.createElement("p", { className: "comment__info-share-amount", onClick: openModal },
                        commentsAmount.length,
                        " Comments")))),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "comment__card-modal", overlayClassName: "comment__card-modal-background" },
            React.createElement(ShowCommentsModal_1.default, { closeModal: closeModal, postsData: commentsData }))));
}
exports.default = CommentElement;
//# sourceMappingURL=CommentElement.js.map