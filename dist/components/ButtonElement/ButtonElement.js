"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ButtonElement.scss");
function ButtonElement(_a) {
    var img = _a.img, name = _a.name, onClick = _a.onClick;
    return (React.createElement("div", { className: "button", onClick: onClick },
        React.createElement("img", { className: "button__img", src: img, alt: "" }),
        React.createElement("p", { className: "button__text" }, name)));
}
exports.default = ButtonElement;
//# sourceMappingURL=ButtonElement.js.map