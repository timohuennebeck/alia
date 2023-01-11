"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ButtonElement.scss");
const React = require("react");
function ButtonElement({ img, name, onClick }) {
    return (React.createElement("div", { className: "button", onClick: onClick },
        React.createElement("img", { className: "button__img", src: img, alt: "" }),
        React.createElement("p", { className: "button__text" }, name)));
}
exports.default = ButtonElement;
