"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./FriendsPage.scss");
// components
var FriendsElement_1 = require("../../components/FriendsElement/FriendsElement");
// libraries
var react_1 = require("react");
// api calls
var api_1 = require("../../utils/api");
function FriendsPage() {
    var _a = (0, react_1.useState)([]), usersData = _a[0], setUsersData = _a[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data);
        });
    }, []);
    if (!usersData) {
        return React.createElement("p", null, "Loading...");
    }
    return (React.createElement("div", { className: "friends" },
        React.createElement("h3", null, "Friends"),
        React.createElement("div", { className: "friends__list" }, usersData.map(function (item) {
            return React.createElement(FriendsElement_1.default, { usersData: item, key: item.id });
        }))));
}
exports.default = FriendsPage;
//# sourceMappingURL=FriendsPage.js.map