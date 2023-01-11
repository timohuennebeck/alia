"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./WatchCommentsPage.scss");
var PostElement_1 = require("../../components/PostElement/PostElement");
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
var calendar_month_svg_1 = require("../../assets/icons/calendar-month.svg");
var react_1 = require("react");
var api_1 = require("../../utils/api");
var DropdownDark_1 = require("../../components/DropdownDark/DropdownDark");
function WatchCommentsPage() {
    var _a = (0, react_1.useState)([]), postsData = _a[0], setPostsData = _a[1];
    var _b = (0, react_1.useState)([]), filteredPostsData = _b[0], setFilteredPostsData = _b[1];
    var _c = (0, react_1.useState)([]), pullValue = _c[0], setPullValue = _c[1];
    var userValues = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        (0, api_1.getPosts)().then(function (_a) {
            var data = _a.data;
            setPostsData(data.filter(function (favorite) { return favorite.status === "Favorite"; }));
        });
    }, []);
    (0, react_1.useEffect)(function () {
        setFilteredPostsData(postsData.filter(function (favorite) {
            return favorite.status === "Favorite" && favorite.users_id === Number(pullValue);
        }));
    }, [pullValue]);
    var handleChange = function (e) {
        setPullValue(e.target.value);
    };
    return (React.createElement("form", { className: "comments", ref: userValues },
        React.createElement("div", { className: "comments__nav" },
            React.createElement(DropdownDark_1.default, { onChange: handleChange }),
            React.createElement(ButtonElementDark_1.default, { img: calendar_month_svg_1.default, name: "Date" })),
        React.createElement("div", { className: "comments__saved" }, filteredPostsData.map(function (item) {
            return React.createElement(PostElement_1.default, { postsData: item, key: item.id });
        }))));
}
exports.default = WatchCommentsPage;
//# sourceMappingURL=WatchCommentsPage.js.map