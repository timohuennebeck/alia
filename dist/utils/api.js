"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsId = exports.getComments = exports.getEventsId = exports.getEvents = exports.getMeetingsId = exports.getMeetings = exports.getFilesId = exports.getFiles = exports.getHubsId = exports.getHubs = exports.getPostsId = exports.getPosts = exports.getFriends = exports.getUsersId = exports.getUsers = void 0;
var axios_1 = require("axios");
var API_URL = process.env.REACT_APP_API_URL;
// users
var getUsers = function () {
    return axios_1.default.get("".concat(API_URL, "/users"));
};
exports.getUsers = getUsers;
var getUsersId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/users/").concat(id));
};
exports.getUsersId = getUsersId;
// friends
var getFriends = function () {
    return axios_1.default.get("".concat(API_URL, "/friends"));
};
exports.getFriends = getFriends;
// posts
var getPosts = function () {
    return axios_1.default.get("".concat(API_URL, "/posts"));
};
exports.getPosts = getPosts;
var getPostsId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/posts/").concat(id));
};
exports.getPostsId = getPostsId;
// hubs
var getHubs = function () {
    return axios_1.default.get("".concat(API_URL, "/hubs"));
};
exports.getHubs = getHubs;
var getHubsId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/hubs/").concat(id));
};
exports.getHubsId = getHubsId;
// files
var getFiles = function () {
    return axios_1.default.get("".concat(API_URL, "/files"));
};
exports.getFiles = getFiles;
var getFilesId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/files/").concat(id));
};
exports.getFilesId = getFilesId;
// files
var getMeetings = function () {
    return axios_1.default.get("".concat(API_URL, "/meetings"));
};
exports.getMeetings = getMeetings;
var getMeetingsId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/meetings/").concat(id));
};
exports.getMeetingsId = getMeetingsId;
// events
var getEvents = function () {
    return axios_1.default.get("".concat(API_URL, "/events"));
};
exports.getEvents = getEvents;
var getEventsId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/events/").concat(id));
};
exports.getEventsId = getEventsId;
// events
var getComments = function () {
    return axios_1.default.get("".concat(API_URL, "/comments"));
};
exports.getComments = getComments;
var getCommentsId = function (_a) {
    var id = _a.id;
    return axios_1.default.get("".concat(API_URL, "/comments/").concat(id));
};
exports.getCommentsId = getCommentsId;
//# sourceMappingURL=api.js.map