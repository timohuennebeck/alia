"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./AddNewComment.scss");
const react_1 = __importDefault(require("react"));
const InputField_1 = __importDefault(require("../InputField/InputField"));
const portrait_jpg_1 = __importDefault(require("../../assets/images/portrait.jpg"));
const chat_svg_1 = __importDefault(require("../../assets/icons/chat.svg"));
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
