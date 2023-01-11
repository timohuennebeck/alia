"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./HomePage.scss");
// icons
var paperclip_svg_1 = require("../../assets/icons/paperclip.svg");
var image_gallery_svg_1 = require("../../assets/icons/image-gallery.svg");
var clock_svg_1 = require("../../assets/icons/clock.svg");
var users_svg_1 = require("../../assets/icons/users.svg");
var microphone_svg_1 = require("../../assets/icons/microphone.svg");
var bell_slash_svg_1 = require("../../assets/icons/bell-slash.svg");
var more_h_svg_1 = require("../../assets/icons/more-h.svg");
var chat_svg_1 = require("../../assets/icons/chat.svg");
// components
var InputField_1 = require("../../components/InputField/InputField");
var PostElement_1 = require("../../components/PostElement/PostElement");
// libraries
var react_router_dom_1 = require("react-router-dom");
var auth0_react_1 = require("@auth0/auth0-react");
// api calls
var react_1 = require("react");
var api_1 = require("../../utils/api");
function HomePage() {
    var _a = (0, react_1.useState)(), postsData = _a[0], setPostsData = _a[1];
    var user = (0, auth0_react_1.useAuth0)().user;
    (0, react_1.useEffect)(function () {
        (0, api_1.getPosts)().then(function (_a) {
            var data = _a.data;
            setPostsData(data.filter(function (posts) { return posts.hubs_id === 1; }));
        });
    }, []);
    return (React.createElement("div", { className: "home" },
        React.createElement("div", { className: "home__channel" },
            React.createElement("div", { className: "home__channel-ctn" },
                React.createElement("div", { className: "home__channel-ctn-emblem" }),
                React.createElement("div", { className: "home__channel-ctn-content" },
                    React.createElement("h4", { className: "home__channel-ctn-content-header" }, "You are exploring \"News\"!"),
                    React.createElement("p", { className: "home__channel-ctn-content-text" }, "2 Participants In a Huddle..."))),
            React.createElement("div", { className: "home__channel-images" },
                React.createElement(react_router_dom_1.Link, { to: "/huddle", className: "home__channel-images-ctn" },
                    React.createElement("img", { className: "home__channel-images-ctn-indv", src: microphone_svg_1.default, alt: "" })),
                React.createElement(react_router_dom_1.Link, { className: "home__channel-images-ctn" },
                    React.createElement("img", { className: "home__channel-images-ctn-indv", src: bell_slash_svg_1.default, alt: "" })),
                React.createElement(react_router_dom_1.Link, { className: "home__channel-images-ctn" },
                    React.createElement("img", { className: "home__channel-images-ctn-indv", src: more_h_svg_1.default, alt: "" })))),
        React.createElement("div", { className: "home__share" },
            React.createElement("img", { className: "home__share-img", src: user.picture, alt: "" }),
            React.createElement("div", { className: "home__share-ctn" },
                React.createElement("div", { className: "home__share-ctn-publish" },
                    React.createElement(InputField_1.default, { placeholder: "What's happening?" }),
                    React.createElement("div", { className: "home__share-ctn-publish-ctn" },
                        React.createElement("img", { className: "home__share-ctn-publish-ctn-img", src: chat_svg_1.default, alt: "" }),
                        React.createElement("p", { className: "home__share-ctn-publish-ctn-text" }, "Publish"))),
                React.createElement("div", { className: "home__share-ctn-images" },
                    React.createElement("div", { className: "home__share-ctn-images-indv" },
                        React.createElement("img", { className: "home__share-ctn-images-indv-icon", src: paperclip_svg_1.default, alt: "" }),
                        React.createElement("p", { className: "home__share-ctn-images-indv-text" }, "Attachments")),
                    React.createElement("div", { className: "home__share-ctn-images-indv" },
                        React.createElement("img", { className: "home__share-ctn-images-indv-icon", src: image_gallery_svg_1.default, alt: "" }),
                        React.createElement("p", { className: "home__share-ctn-images-indv-text" }, "Image")),
                    React.createElement("div", { className: "home__share-ctn-images-indv" },
                        React.createElement("img", { className: "home__share-ctn-images-indv-icon", src: clock_svg_1.default, alt: "" }),
                        React.createElement("p", { className: "home__share-ctn-images-indv-text" }, "Poll")),
                    React.createElement("div", { className: "home__share-ctn-images-indv" },
                        React.createElement("img", { className: "home__share-ctn-images-indv-icon", src: users_svg_1.default, alt: "" }),
                        React.createElement("p", { className: "home__share-ctn-images-indv-text" }, "Meeting"))))), postsData === null || postsData === void 0 ? void 0 :
        postsData.map(function (item) {
            return React.createElement(PostElement_1.default, { postsData: item, key: item.id });
        })));
}
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map