import "./UserInterfaceLYT.scss";

import MobileHeader from "../MobileHeader/MobileHeader";
import { Outlet } from "react-router-dom";
import FriendsPage from "../../pages/FriendsPage/FriendsPage";
import FavoriteHubsPage from "../../pages/FavoriteHubsPage/FavoriteHubsPage";
import UpcomingMeetingsPage from "../../pages/UpcomingMeetingsPage/UpcomingMeetingsPage";
import UpcomingEventsPage from "../../pages/UpcomingEventsPage/UpcomingEventsPage";
import TrendingPage from "../../pages/TrendingPage/TrendingPage";
import TrendingForYouPage from "../../pages/TrendingForYouPage/TrendingForYouPage";

export default function UserInterfaceLYT() {
    return (
        <div className="interface">
            <div className="interface__mobile">
                <MobileHeader />
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
                    <UpcomingMeetingsPage />
                    <UpcomingEventsPage />
                    <TrendingForYouPage />
                </div>
            </div>
        </div>
    );
}
