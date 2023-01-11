"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./TrendingPage.scss");
// icons
var microphone_svg_1 = require("../../assets/icons/microphone.svg");
var bell_slash_svg_1 = require("../../assets/icons/bell-slash.svg");
var more_h_svg_1 = require("../../assets/icons/more-h.svg");
// components
var PostElement_1 = require("../../components/PostElement/PostElement");
function TrendingPage() {
    return (React.createElement("div", { className: "trending" },
        React.createElement("div", { className: "trending__channel" },
            React.createElement("div", { className: "trending__channel-ctn" },
                React.createElement("div", { className: "trending__channel-ctn-emblem" }),
                React.createElement("div", { className: "trending__channel-ctn-content" },
                    React.createElement("h4", { className: "trending__channel-ctn-content-header" }, "You are exploring \"Trending\"!"),
                    React.createElement("p", { className: "trending__channel-ctn-content-text" }, "2 Participants In a Huddle..."))),
            React.createElement("div", { className: "trending__channel-images" },
                React.createElement("div", { className: "trending__channel-images-ctn" },
                    React.createElement("img", { className: "trending__channel-images-ctn-indv", src: microphone_svg_1.default, alt: "" })),
                React.createElement("div", { className: "trending__channel-images-ctn" },
                    React.createElement("img", { className: "trending__channel-images-ctn-indv", src: bell_slash_svg_1.default, alt: "" })),
                React.createElement("div", { className: "trending__channel-images-ctn" },
                    React.createElement("img", { className: "trending__channel-images-ctn-indv", src: more_h_svg_1.default, alt: "" })))),
        React.createElement(PostElement_1.default, null),
        React.createElement(PostElement_1.default, null),
        React.createElement(PostElement_1.default, null),
        React.createElement(PostElement_1.default, null),
        React.createElement(PostElement_1.default, null),
        React.createElement(PostElement_1.default, null)));
}
exports.default = TrendingPage;
//# sourceMappingURL=TrendingPage.js.map