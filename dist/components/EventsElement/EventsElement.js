"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./EventsElement.scss");
function EventsElement(_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "events-element" },
        React.createElement("p", { className: "events-element__hashtag" }, data.name),
        React.createElement("p", { className: "events-element__amount" }, data.time_at)));
}
exports.default = EventsElement;
//# sourceMappingURL=EventsElement.js.map