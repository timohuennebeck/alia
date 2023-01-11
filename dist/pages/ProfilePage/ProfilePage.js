"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostElement_1 = require("../../components/PostElement/PostElement");
require("./ProfilePage.scss");
var melanie_perkins_jpg_1 = require("../../assets/images/melanie-perkins.jpg");
var ProfileImgFriends_1 = require("../../components/ProfileImgFriends/ProfileImgFriends");
var calendar_month_svg_1 = require("../../assets/icons//calendar-month.svg");
var more_h_svg_1 = require("../../assets/icons/more-h.svg");
var UserProfile_1 = require("../../components/UserProfile/UserProfile");
var react_1 = require("react");
var api_1 = require("../../utils/api");
var react_router_dom_1 = require("react-router-dom");
function ProfilePage() {
    var _a = (0, react_1.useState)([]), usersData = _a[0], setUsersData = _a[1];
    var _b = (0, react_1.useState)([]), postsData = _b[0], setPostsData = _b[1];
    var id = (0, react_router_dom_1.useParams)().id;
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsersId)({ id: id }).then(function (_a) {
            var data = _a.data;
            setUsersData(data[0]);
        });
        (0, api_1.getPosts)().then(function (_a) {
            var data = _a.data;
            setPostsData(data.filter(function (item) { return item.users_id === Number(id); }));
        });
    }, [id]);
    return (React.createElement("div", { className: "personal-profile" },
        React.createElement("div", { className: "personal-profile__friends" },
            React.createElement(ProfileImgFriends_1.default, { img: melanie_perkins_jpg_1.default }),
            React.createElement(ProfileImgFriends_1.default, { img: melanie_perkins_jpg_1.default })),
        React.createElement("div", { className: "personal-profile__ctn" },
            React.createElement(UserProfile_1.default, { usersData: usersData }),
            React.createElement("div", { className: "personal-profile__ctn-posts" },
                React.createElement("div", { className: "personal-profile__ctn-posts-content" },
                    React.createElement("h3", { className: "personal-profile__ctn-posts-content-header" }, "Your Posts"),
                    React.createElement("p", { className: "personal-profile__ctn-posts-content-amount" }, "25 Posts")),
                React.createElement("div", { className: "personal-profile__ctn-posts-images" },
                    React.createElement("img", { className: "personal-profile__ctn-posts-images-indv", src: calendar_month_svg_1.default, alt: "" }),
                    React.createElement("img", { className: "personal-profile__ctn-posts-images-indv", src: more_h_svg_1.default, alt: "" }))),
            React.createElement("div", { className: "personal-profile__ctn-comments" }, postsData.map(function (item) {
                return React.createElement(PostElement_1.default, { postsData: item, key: item.id });
            })))));
}
exports.default = ProfilePage;
//# sourceMappingURL=ProfilePage.js.map