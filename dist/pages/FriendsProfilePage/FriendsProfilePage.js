"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostElement_1 = require("../../components/PostElement/PostElement");
require("./FriendsProfilePage.scss");
var melanie_perkins_jpg_1 = require("../../assets/images/melanie-perkins.jpg");
var ProfileImgFriends_1 = require("../../components/ProfileImgFriends/ProfileImgFriends");
var calendar_month_svg_1 = require("../../assets/icons//calendar-month.svg");
var more_h_svg_1 = require("../../assets/icons/more-h.svg");
var UserProfile_1 = require("../../components/UserProfile/UserProfile");
var bell_slash_svg_1 = require("../../assets/icons/bell-slash.svg");
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
var user_plus_svg_1 = require("../../assets/icons/user-plus.svg");
var chat_svg_1 = require("../../assets/icons/chat.svg");
// libraries
// api calls
var api_1 = require("../../utils/api");
var api_2 = require("../../utils/api");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function FriendsProfilePage() {
    var _a = (0, react_1.useState)([]), usersData = _a[0], setUsersData = _a[1];
    var _b = (0, react_1.useState)([]), postsData = _b[0], setPostsData = _b[1];
    var id = (0, react_router_dom_1.useParams)().id;
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data.filter(function (friend) { return friend.id === Number(id); })[0]);
        });
        (0, api_2.getPosts)().then(function (_a) {
            var data = _a.data;
            setPostsData(data.filter(function (post) { return post.users_id === Number(id); }));
        });
    }, [id]);
    return (React.createElement("div", { className: "friends-profile" },
        React.createElement("div", { className: "friends-profile__nav" },
            React.createElement("div", { className: "friends-profile__nav-desktop" },
                React.createElement(ButtonElementDark_1.default, { img: calendar_month_svg_1.default, name: "Meeting" })),
            React.createElement("div", { className: "friends-profile__nav-mobile" },
                React.createElement(ButtonElementDark_1.default, { img: user_plus_svg_1.default, name: "Add Friend" })),
            React.createElement("div", { className: "friends-profile__nav-mobile" },
                React.createElement(ButtonElementDark_1.default, { img: chat_svg_1.default, name: "Message" })),
            React.createElement("div", { className: "friends-profile__nav-desktop" },
                React.createElement(ButtonElementDark_1.default, { img: calendar_month_svg_1.default, name: "Huddle" })),
            React.createElement("div", { className: "friends-profile__nav-desktop" },
                React.createElement(ButtonElementDark_1.default, { img: bell_slash_svg_1.default, name: "Notifications" }))),
        React.createElement("div", { className: "friends-profile__align" },
            React.createElement("div", { className: "friends-profile__align-friends" },
                React.createElement(ProfileImgFriends_1.default, { img: melanie_perkins_jpg_1.default }),
                React.createElement(ProfileImgFriends_1.default, { img: melanie_perkins_jpg_1.default })),
            React.createElement("div", { className: "friends-profile__align-right" },
                React.createElement(UserProfile_1.default, { usersData: usersData }),
                React.createElement("div", { className: "friends-profile__align-right-posts" },
                    React.createElement("div", { className: "friends-profile__align-right-posts-content" },
                        React.createElement("h3", { className: "friends-profile__align-right-posts-content-header" },
                            usersData.first_name,
                            "'s Posts"),
                        React.createElement("p", { className: "friends-profile__align-right-posts-content-amount" }, "25 Posts")),
                    React.createElement("div", { className: "friends-profile__align-right-posts-images" },
                        React.createElement("img", { className: "friends-profile__align-right-posts-images-indv", src: calendar_month_svg_1.default, alt: "" }),
                        React.createElement("img", { className: "friends-profile__align-right-posts-images-indv", src: bell_slash_svg_1.default, alt: "" }),
                        React.createElement("img", { className: "friends-profile__align-right-posts-images-indv", src: more_h_svg_1.default, alt: "" }))),
                React.createElement("div", { className: "friends-profile__align-right-comments" }, postsData.map(function (item) {
                    return React.createElement(PostElement_1.default, { postsData: item, key: item.id });
                }))))));
}
exports.default = FriendsProfilePage;
//# sourceMappingURL=FriendsProfilePage.js.map