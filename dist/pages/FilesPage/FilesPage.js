"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonElementDark_1 = require("../../components/ButtonElementDark/ButtonElementDark");
require("./FilesPage.scss");
var history_svg_1 = require("../../assets/icons/history.svg");
var heart_svg_1 = require("../../assets/icons/heart.svg");
var DetailsRow_1 = require("../../components/DetailsRow/DetailsRow");
// libraries
var react_1 = require("react");
// api calls
var api_1 = require("../../utils/api");
function FilesPage() {
    var _a = (0, react_1.useState)([]), filesData = _a[0], setFilesData = _a[1];
    (0, react_1.useEffect)(function () {
        (0, api_1.getFiles)().then(function (_a) {
            var data = _a.data;
            setFilesData(data);
        });
    }, []);
    return (React.createElement("div", { className: "files" },
        React.createElement("div", { className: "files__buttons" },
            React.createElement(ButtonElementDark_1.default, { img: history_svg_1.default, name: "Recent" }),
            React.createElement(ButtonElementDark_1.default, { img: heart_svg_1.default, name: "Favorites" })),
        React.createElement("div", { className: "files__information" }, filesData.map(function (item) {
            return React.createElement(DetailsRow_1.default, { data: item, key: item.id });
        }))));
}
exports.default = FilesPage;
//# sourceMappingURL=FilesPage.js.map