"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./MeetingsElement.scss");
function MeetingsElement(_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "meetings-element" },
        React.createElement("p", { className: "meetings-element__hashtag" }, data.name),
        React.createElement("p", { className: "meetings-element__amount" }, data.time_at)));
}
exports.default = MeetingsElement;
//# sourceMappingURL=MeetingsElement.js.map