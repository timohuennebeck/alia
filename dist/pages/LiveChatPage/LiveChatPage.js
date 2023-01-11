"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./LiveChatPage.scss");
var chat_svg_1 = require("../../assets/icons/chat.svg");
var users_svg_1 = require("../../assets/icons/users.svg");
var chevron_double_left_svg_1 = require("../../assets/icons/chevron-double-left.svg");
var InputField_1 = require("../../components/InputField/InputField");
function LiveChatPage() {
    return (React.createElement("div", { className: "chat" },
        React.createElement("div", { className: "chat__buttons" },
            React.createElement("div", { className: "chat__buttons-arrow" },
                React.createElement("img", { className: "chat__buttons-arrow-img", src: chevron_double_left_svg_1.default, alt: "" }),
                React.createElement("p", null, "Back")),
            React.createElement("div", { className: "chat__buttons-messages" },
                React.createElement("img", { className: "chat__buttons-messages-img", src: chat_svg_1.default, alt: "" })),
            React.createElement("div", { className: "chat__buttons-users" },
                React.createElement("img", { className: "chat__buttons-users-img", src: users_svg_1.default, alt: "" }))),
        React.createElement("div", { className: "chat__respond" },
            React.createElement("p", { className: "chat__respond-writing" }, "Melanie is writing..."),
            React.createElement("div", { className: "chat__respond-ctn" },
                React.createElement(InputField_1.default, { placeholder: "Write a message here..." }),
                React.createElement("div", { className: "chat__respond-ctn-indv" },
                    React.createElement("img", { className: "chat__respond-ctn-indv-img", src: chat_svg_1.default, alt: "" }))))));
}
exports.default = LiveChatPage;
//# sourceMappingURL=LiveChatPage.js.map