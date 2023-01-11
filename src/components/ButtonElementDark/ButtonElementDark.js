"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ButtonElementDark.scss");
const React = require("react");
function ButtonElementDark({ img, name, onClick }) {
    return (React.createElement("div", { className: "button-dark", onClick: onClick },
        React.createElement("img", { className: "button-dark__img", src: img, alt: "" }),
        React.createElement("p", { className: "button-dark__text" }, name)));
}
exports.default = ButtonElementDark;
