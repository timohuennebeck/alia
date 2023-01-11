"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ButtonElementDark.scss");
function ButtonElementDark(_a) {
    var img = _a.img, name = _a.name, onClick = _a.onClick;
    return (React.createElement("div", { className: "button-dark", onClick: onClick },
        React.createElement("img", { className: "button-dark__img", src: img, alt: "" }),
        React.createElement("p", { className: "button-dark__text" }, name)));
}
exports.default = ButtonElementDark;
//# sourceMappingURL=ButtonElementDark.js.map