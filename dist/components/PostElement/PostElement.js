"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./PostElement.scss");
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
function PostElement(_a) {
    var postsData = _a.postsData;
    var _b = (0, react_1.useState)(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    var _c = (0, react_1.useState)([]), usersData = _c[0], setUsersData = _c[1];
    var _d = (0, react_1.useState)([]), commentsAmount = _d[0], setCommentsAmount = _d[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data.filter(function (user) { return user.id === postsData.users_id; })[0]);
        });
        (0, api_1.getComments)().then(function (_a) {
            var data = _a.data;
            setCommentsAmount(data.filter(function (comment) { return comment.posts_id === postsData.id; }));
        });
    }, []);
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    if (!usersData || !commentsAmount) {
        return React.createElement("p", null, "Loading Database...");
    }
    if (commentsAmount === 0) {
        console.log("Hello");
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "post" },
            React.createElement(react_router_dom_1.Link, { to: "/friends-profile/".concat(postsData.users_id) },
                React.createElement("img", { className: "post__profile", src: usersData.image_url, alt: "" })),
            React.createElement("div", { className: "post__info" },
                React.createElement("div", { className: "post__info-ctn" },
                    React.createElement("div", { className: "post__info-ctn-name" },
                        React.createElement("img", { className: "post__info-ctn-name-img", src: usersData.image_url, alt: "" }),
                        React.createElement("div", { className: "post__info-ctn-name-indv" },
                            React.createElement("h5", { className: "post__info-ctn-name-indv-header" },
                                usersData.first_name,
                                " ",
                                usersData.last_name),
                            React.createElement("p", { className: "post__info-ctn-name-indv-username" }, usersData.username))),
                    React.createElement("img", { className: "post__info-ctn-img", src: more_v_svg_1.default, alt: "" })),
                React.createElement("div", { className: "post__info-content" },
                    React.createElement("p", { className: "post__info-content-paragraph" }, postsData.message),
                    React.createElement("p", { className: "post__info-content-amount", onClick: openModal },
                        commentsAmount.length,
                        " Comments")),
                React.createElement("div", { className: "post__info-date" },
                    React.createElement("p", { className: "post__info-date-time" }, new Date(postsData.created_at).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })),
                    React.createElement("p", { className: "post__info-date-date" }, new Date(postsData.created_at).toLocaleDateString())),
                React.createElement("div", { className: "post__info-share" },
                    React.createElement("div", { className: "post__info-share-buttons" },
                        React.createElement(ButtonElement_1.default, { img: eye_svg_1.default, name: "Watch" }),
                        React.createElement(ButtonElement_1.default, { img: chat_svg_1.default, name: "Comment", onClick: openModal })),
                    React.createElement("p", { className: "post__info-share-amount", onClick: openModal },
                        commentsAmount.length,
                        " Comments")))),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, onRequestClose: closeModal, className: "post__card-modal", overlayClassName: "post__card-modal-background" },
            React.createElement(ShowCommentsModal_1.default, { closeModal: closeModal, postsData: postsData }))));
}
exports.default = PostElement;
//# sourceMappingURL=PostElement.js.map