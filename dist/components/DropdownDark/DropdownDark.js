"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var api_1 = require("../../utils/api");
require("./DropdownDark.scss");
var user_svg_1 = require("../../assets/icons/user.svg");
function DropdownDark(_a) {
    var onChange = _a.onChange;
    var _b = (0, react_1.useState)([]), usersData = _b[0], setUsersData = _b[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getUsers)().then(function (_a) {
            var data = _a.data;
            setUsersData(data);
        });
    }, []);
    return (React.createElement("div", { className: "dropdown-dark" },
        React.createElement("img", { className: "dropdown-dark__img", src: user_svg_1.default, alt: "" }),
        React.createElement("select", { className: "dropdown-dark__select", name: "status", onChange: onChange },
            React.createElement("option", { className: "dropdown-dark__select-option", value: "", disabled: true, selected: true }, "Person"),
            usersData.map(function (item) {
                return (React.createElement("option", { className: "dropdown-dark__select-option", value: item.id, key: item.id },
                    item.first_name,
                    " ",
                    item.last_name));
            }))));
}
exports.default = DropdownDark;
//# sourceMappingURL=DropdownDark.js.map