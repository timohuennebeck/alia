import "./UserInterfaceLYT.scss";

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FriendsPage from "../../pages/FriendsPage/FriendsPage";
import FavoriteHubsPage from "../../pages/FavoriteHubsPage/FavoriteHubsPage";
import UpcomingMeetingsPage from "../../pages/UpcomingMeetingsPage/UpcomingMeetingsPage";
import UpcomingEventsPage from "../../pages/UpcomingEventsPage/UpcomingEventsPage";

export default function UserInterfaceLYT() {
    return (
        <div className="interface">
            <div className="interface__mobile">
                <Header />
                <div className="interface__mobile-explore">
                    <input className="interface__mobile-explore-input" placeholder="# Explore" />
                </div>
            </div>
            <div className="interface__desktop">
                <div className="interface__desktop-left">
                    <div className="interface__desktop-left-explore">
                        <input
                            className="interface__desktop-left-explore-input"
                            placeholder="# Explore"
                        />
                    </div>
                    <FriendsPage />
                    <FavoriteHubsPage />
                </div>
                <div className="interface__desktop-main">
                    <Outlet />
                </div>
                <div className="interface__desktop-right">
                    <Header />
                    <UpcomingMeetingsPage />
                    <UpcomingEventsPage />
                    {/* <TrendingForYouPage /> */}
                </div>
            </div>
        </div>
    );
}
