import "./SearchInterfaceLYT.scss";

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import FriendsPage from "../../pages/FriendsPage/FriendsPage";
import FavoriteHubsPage from "../../pages/FavoriteHubsPage/FavoriteHubsPage";
import UpcomingMeetingsPage from "../../pages/UpcomingMeetingsPage/UpcomingMeetingsPage";
import UpcomingEventsPage from "../../pages/UpcomingEventsPage/UpcomingEventsPage";
import TrendingForYouPage from "../../pages/TrendingForYouPage/TrendingForYouPage";
import searchImg from "../../assets/icons/search.svg";

export default function SearchInterfaceLYT() {
    return (
        <div className="search">
            <div className="search__mobile">
                <Header />
                <div className="search__mobile-explore">
                    <img className="search__mobile-explore-img" src={searchImg} alt="" />
                    <input className="search__mobile-explore-input" placeholder="Search..." />
                </div>
            </div>
            <div className="search__desktop">
                <div className="search__desktop-left">
                    <div className="search__desktop-left-explore">
                        <input
                            className="search__desktop-left-explore-input"
                            placeholder="# Explore"
                        />
                    </div>
                    <FriendsPage />
                    <FavoriteHubsPage />
                </div>
                <div className="search__desktop-main">
                    <div className="search__desktop-main-explore">
                        <img className="search__desktop-main-explore-img" src={searchImg} alt="" />
                        <input
                            className="search__desktop-main-explore-input"
                            placeholder="Search..."
                        />
                    </div>
                    <Outlet />
                </div>
                <div className="search__desktop-right">
                    <Header />
                    <UpcomingMeetingsPage />
                    <UpcomingEventsPage />
                    {/* <TrendingForYouPage /> */}
                </div>
            </div>
        </div>
    );
}
