"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./DetailsRow.scss");
const React = require("react");
const more_v_svg_1 = __importDefault(require("../../assets/icons/more-v.svg"));
const info_circle_svg_1 = __importDefault(require("../../assets/icons/info-circle.svg"));
const heart_svg_1 = __importDefault(require("../../assets/icons/heart.svg"));
function DetailsRow({ data }) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "details" },
            React.createElement("h5", { className: "details__header" }, data.name),
            React.createElement("div", { className: "details__info" },
                React.createElement("img", { className: "details__info-img", src: info_circle_svg_1.default, alt: "" }),
                React.createElement("p", { className: "details__info-date" }, "Jul 28, 2022")),
            React.createElement("p", { className: "details__date" }, "10:00 - 11:30 PM"),
            React.createElement("img", { className: "details__img", src: heart_svg_1.default, alt: "" }),
            React.createElement("img", { className: "details__more", src: more_v_svg_1.default, alt: "" }))));
}
exports.default = DetailsRow;
