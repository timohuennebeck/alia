"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./HuddlePage.scss");
var ButtonElement_1 = require("../../components/ButtonElement/ButtonElement");
var eye_slash_svg_1 = require("../../assets/icons/eye-slash.svg");
var chat_svg_1 = require("../../assets/icons/chat.svg");
var HuddleUserVideo_1 = require("../../components/HuddleUserVideo/HuddleUserVideo");
var collapse_svg_1 = require("../../assets/icons/collapse.svg");
var microphone_mute_svg_1 = require("../../assets/icons/microphone-mute.svg");
var cast_svg_1 = require("../../assets/icons/cast.svg");
var cog_svg_1 = require("../../assets/icons/cog.svg");
var phone_svg_1 = require("../../assets/icons/phone.svg");
var LiveChatPage_1 = require("../LiveChatPage/LiveChatPage");
// libraries
var react_router_dom_1 = require("react-router-dom");
function HuddlePage() {
    return (React.createElement("div", { className: "huddle" },
        React.createElement("div", { className: "huddle__left" },
            React.createElement("div", { className: "huddle__left-hide" },
                React.createElement(react_router_dom_1.Link, { to: "/", className: "huddle__left-hide-link" },
                    React.createElement(ButtonElement_1.default, { img: eye_slash_svg_1.default, name: "Hide" })),
                React.createElement("h3", null, "Introduction to Next.js...")),
            React.createElement("div", { className: "huddle__left-interface" },
                React.createElement("div", { className: "huddle__left-interface-top" },
                    React.createElement("div", { className: "huddle__left-interface-top-chat" },
                        React.createElement("div", { className: "huddle__left-interface-top-chat-time" },
                            React.createElement("p", { className: "huddle__left-interface-top-chat-time-indv" }, "3:15")),
                        React.createElement("div", { className: "huddle__left-interface-top-chat-img" },
                            React.createElement("img", { className: "huddle__left-interface-top-chat-img-indv", src: chat_svg_1.default, alt: "" }))),
                    React.createElement("div", { className: "huddle__left-interface-top-users" },
                        React.createElement(HuddleUserVideo_1.default, null),
                        React.createElement(HuddleUserVideo_1.default, null),
                        React.createElement(HuddleUserVideo_1.default, null))),
                React.createElement("div", { className: "huddle__left-interface-nav" },
                    React.createElement("div", { className: "huddle__left-interface-nav-indv" },
                        React.createElement("img", { className: "huddle__left-interface-nav-indv-img", src: collapse_svg_1.default, alt: "" })),
                    React.createElement("div", { className: "huddle__left-interface-nav-indv" },
                        React.createElement("img", { className: "huddle__left-interface-nav-indv-img", src: microphone_mute_svg_1.default, alt: "" })),
                    React.createElement("div", { className: "huddle__left-interface-nav-end" },
                        React.createElement("img", { className: "huddle__left-interface-nav-end-img", src: phone_svg_1.default, alt: "" })),
                    React.createElement("div", { className: "huddle__left-interface-nav-indv" },
                        React.createElement("img", { className: "huddle__left-interface-nav-indv-img", src: cast_svg_1.default, alt: "" })),
                    React.createElement("div", { className: "huddle__left-interface-nav-indv" },
                        React.createElement("img", { className: "huddle__left-interface-nav-indv-img", src: cog_svg_1.default, alt: "" })))),
            React.createElement("div", { className: "huddle__left-transcribe" },
                React.createElement("p", { className: "huddle__left-transcribe-header" }, "New"),
                React.createElement("p", null, "Thanks for sending all those completed..."))),
        React.createElement("div", { className: "huddle__right" },
            React.createElement(LiveChatPage_1.default, null))));
}
exports.default = HuddlePage;
//# sourceMappingURL=HuddlePage.js.map