"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ShowCommentsModal.scss");
// components
var PostElement_1 = require("../PostElement/PostElement");
var AddNewComment_1 = require("../AddNewComment/AddNewComment");
var react_1 = require("react");
var api_1 = require("../../utils/api");
var ButtonElementDark_1 = require("../ButtonElementDark/ButtonElementDark");
var eye_slash_svg_1 = require("../../assets/icons/eye-slash.svg");
var CommentElement_1 = require("../CommentElement/CommentElement");
function ShowCommentsModal(_a) {
    var postsData = _a.postsData, closeModal = _a.closeModal;
    var _b = (0, react_1.useState)([]), commentsData = _b[0], setCommentsData = _b[1];
    // console.log(postsData);
    (0, react_1.useEffect)(function () {
        (0, api_1.getComments)().then(function (_a) {
            var data = _a.data;
            setCommentsData(data.filter(function (comments) { return comments.posts_id === postsData.id; }));
        });
    }, []);
    return (React.createElement("div", { className: "show-comments" },
        React.createElement("div", { className: "show-comments__buttons" },
            React.createElement(ButtonElementDark_1.default, { name: "Hide", img: eye_slash_svg_1.default, onClick: closeModal })),
        React.createElement("div", { className: "show-comments__main" },
            React.createElement("div", { className: "show-comments__main-indv" },
                React.createElement(PostElement_1.default, { postsData: postsData }),
                React.createElement(AddNewComment_1.default, null)),
            React.createElement("div", { className: "show-comments__main-indv" }, commentsData.map(function (item) {
                return React.createElement(CommentElement_1.default, { commentsData: item, key: item.id });
            })))));
}
exports.default = ShowCommentsModal;
//# sourceMappingURL=ShowCommentsModal.js.map