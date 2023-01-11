"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./UserProfile.scss");
var ButtonElement_1 = require("../ButtonElement/ButtonElement");
var clock_svg_1 = require("../../assets/icons/clock.svg");
var mail_svg_1 = require("../../assets/icons/mail.svg");
var more_v_svg_1 = require("../../assets/icons/more-v.svg");
function UserProfile(_a) {
    var usersData = _a.usersData;
    return (React.createElement("div", { className: "user" },
        React.createElement("img", { className: "user__profile", src: usersData.image_url, alt: "" }),
        React.createElement("div", { className: "user__info" },
            React.createElement("div", { className: "user__info-ctn" },
                React.createElement("div", { className: "user__info-ctn-name" },
                    React.createElement("img", { className: "user__info-ctn-name-img", src: usersData.image_url, alt: "" }),
                    React.createElement("div", { className: "user__info-ctn-name-indv" },
                        React.createElement("h5", { className: "user__info-ctn-name-indv-header" },
                            usersData.first_name,
                            " ",
                            usersData.last_name),
                        React.createElement("p", { className: "user__info-ctn-name-indv-username" }, usersData.username))),
                React.createElement("img", { className: "user__info-ctn-img", src: more_v_svg_1.default, alt: "" })),
            React.createElement("p", { className: "user__info-paragraph" }, usersData.description),
            React.createElement("div", { className: "user__info-share" },
                React.createElement("div", { className: "user__info-share-buttons" },
                    React.createElement(ButtonElement_1.default, { img: clock_svg_1.default, name: "7:33 PM" }),
                    React.createElement(ButtonElement_1.default, { img: mail_svg_1.default, name: "Email" })),
                React.createElement("p", { className: "user__info-share-amount" }, "7 Comments")))));
}
exports.default = UserProfile;
//# sourceMappingURL=UserProfile.js.map