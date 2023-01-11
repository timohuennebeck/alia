"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.scss");
// components
var HomePage_1 = require("./pages/HomePage/HomePage");
var FavoriteHubsPage_1 = require("./pages/FavoriteHubsPage/FavoriteHubsPage");
var FriendsPage_1 = require("./pages/FriendsPage/FriendsPage");
var MeetingsPage_jsx_1 = require("./pages/MeetingsPage/MeetingsPage.jsx");
var EventsPage_1 = require("./pages/EventsPage/EventsPage");
// libraries
var react_router_dom_1 = require("react-router-dom");
var auth0_react_1 = require("@auth0/auth0-react");
// pages
var UserInterfaceLYT_1 = require("./components/UserInterfaceLYT/UserInterfaceLYT");
var TrendingPage_1 = require("./pages/TrendingPage/TrendingPage");
var SearchInterfaceLYT_1 = require("./components/SearchInterfaceLYT/SearchInterfaceLYT");
var WatchCommentsPage_1 = require("./pages/WatchCommentsPage/WatchCommentsPage");
var ProfilePage_1 = require("./pages/ProfilePage/ProfilePage");
var FriendsProfilePage_1 = require("./pages/FriendsProfilePage/FriendsProfilePage");
var FilesPage_1 = require("./pages/FilesPage/FilesPage");
var HubsPage_1 = require("./pages/HubsPage/HubsPage");
var HuddlePage_1 = require("./pages/HuddlePage/HuddlePage");
var IndvHubPage_1 = require("./pages/IndvHubPage/IndvHubPage");
var LandingPage_1 = require("./pages/LandingPage/LandingPage");
function App() {
    var isAuthenticated = (0, auth0_react_1.useAuth0)().isAuthenticated;
    if (!isAuthenticated) {
        return React.createElement(LandingPage_1.default, null);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: "/huddle", element: React.createElement(HuddlePage_1.default, null) }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(UserInterfaceLYT_1.default, null) },
                    React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(HomePage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/:id", element: React.createElement(IndvHubPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/friends", element: React.createElement(FriendsPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/trending", element: React.createElement(TrendingPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/favorite-hubs", element: React.createElement(FavoriteHubsPage_1.default, null) })),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(SearchInterfaceLYT_1.default, null) },
                    React.createElement(react_router_dom_1.Route, { path: "/comments", element: React.createElement(WatchCommentsPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/profile/:id", element: React.createElement(ProfilePage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/friends-profile/:id", element: React.createElement(FriendsProfilePage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/files", element: React.createElement(FilesPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/meetings", element: React.createElement(MeetingsPage_jsx_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/events", element: React.createElement(EventsPage_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { path: "/hubs", element: React.createElement(HubsPage_1.default, null) }))))));
}
exports.default = App;
//# sourceMappingURL=App.js.map