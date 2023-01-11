"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./AddNewComment.scss");
var react_1 = require("react");
var InputField_1 = require("../InputField/InputField");
var portrait_jpg_1 = require("../../assets/images/portrait.jpg");
var chat_svg_1 = require("../../assets/icons/chat.svg");
function AddNewComment() {
    return (react_1.default.createElement("div", { className: "add-comment" },
        react_1.default.createElement("div", { className: "add-comment__indv" },
            react_1.default.createElement("img", { className: "add-comment__indv-img", src: portrait_jpg_1.default, alt: "" })),
        react_1.default.createElement(InputField_1.default, { placeholder: "Respond here..." }),
        react_1.default.createElement("div", { className: "add-comment__button" },
            react_1.default.createElement("img", { className: "add-comment__button-img", src: chat_svg_1.default, alt: "" }),
            react_1.default.createElement("p", { className: "add-comment__button-text" }, "Publish"))));
}
exports.default = AddNewComment;
//# sourceMappingURL=AddNewComment.js.map